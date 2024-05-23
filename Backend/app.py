from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import wikipedia

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for simplicity; you can restrict it to specific origins later

# Load a pre-trained object detection model
model = tf.keras.applications.MobileNetV2(weights='imagenet')

def preprocess_image(image):
    try:
        image = tf.image.decode_image(image, channels=3)
        image = tf.image.resize(image, [224, 224])
        image = tf.keras.applications.mobilenet_v2.preprocess_input(image)
        return np.expand_dims(image, axis=0)
    except Exception as e:
        print(f"Error preprocessing image: {e}")
        return None
    
@app.route('/')
def index():
    return 'Welcome to my Flask application!'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        image = file.read()
        if not image:
            return jsonify({'error': 'Empty image file'}), 400
        
        image = preprocess_image(image)
        if image is None:
            return jsonify({'error': 'Error in preprocessing image'}), 500
        
        predictions = model.predict(image)
        decoded_predictions = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=5)[0]

        highest_confidence_prediction = max(decoded_predictions, key=lambda x: x[2])
        _, desc, score = highest_confidence_prediction
        score = score * 100.0
        
        description = "what is " + desc
        
        try:
            wiki_summary = wikipedia.summary(description, sentences=10)
        except wikipedia.exceptions.DisambiguationError as e:
            wiki_summary = f"Disambiguation error for {description}: {e}"
        except wikipedia.exceptions.PageError:
            wiki_summary = f"No Wikipedia page found for {description}"
            
        response = {
            'description': desc,
            'score': int(score),
            'wiki_summary': wiki_summary
        }

        return jsonify(response)
    except Exception as e:
        print(f"Error in prediction: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
