import { upload } from "../assets/Images";
import { CiCamera } from "react-icons/ci";
import { HomeCard, Skeleton, TypeWriter } from "../components";
import 'react-vertical-timeline-component/style.min.css';
import { useState, useRef } from "react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isResShow, setIsResShow] = useState(false);
    const [isImage, setIsImage] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [isCamera, setIsCamera] = useState(false);
    const [predictions, setPredictions] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const handleImageUpload = (event) => {
        event.preventDefault();
        const file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
                setIsImage(true);
                setIsLoading(true);
                sendFrameToBackend(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCameraClick = () => {
        setIsCamera(true);
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        });
    };

    const captureImage = () => {
        let canvas = canvasRef.current;
        let video = videoRef.current;
        const context = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL();
        setImageSrc(imageDataURL);
        setIsImage(true);
        setIsLoading(true);
        canvas.toBlob((blob) => {
            sendFrameToBackend(blob);
        });
        let stream = video.srcObject;
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsCamera(false);
    };

    const sendFrameToBackend = (imageData) => {
        const formData = new FormData();
        formData.append('file', imageData);

        fetch('https://image-recognization-backend-2.onrender.com/predict', {
            method: "POST",
            body: formData,
        }).then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to fetch predictions. Status: ${res.status}`);
            }
            return res.json();
        }).then((data) => {
            setPredictions(data);
            setIsLoading(false);
            setIsResShow(true);
        }).catch((error) => {
            console.error('Error uploading frame:', error);
            setIsLoading(false);
        });
    };

    return (
        <div className="max-container text-slate-300 sm:px-36">
            <div
                className="w-full h-[25em] sm:h-full border border-[#18181B] bg-[#18181B] card-border rounded-md cursor-pointer"
                onDrop={handleImageUpload}
                onDragOver={(e) => e.preventDefault()}
            >
                {!isImage && !isCamera && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="file-upload"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="file-upload" className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
                            <div className="flex justify-center items-center mt-18 sm:mt-28">
                                <img className="w-1/4 sm:w-[80px]" src={upload} alt="upload" />
                            </div>
                            <div>
                                <p className="text-center text-md sm:text-xl pt-10 p-3 sm:pb-16">
                                    Drag & drop files here or click to select files
                                </p>
                            </div>
                        </label>
                    </>
                )}
                {isCamera && (
                    <div className="w-full h-full sm:h-screen flex flex-col items-center py-10 sm:py-10 justify-center">
                        <video ref={videoRef} className="w-full h-full"></video>
                        <button
                            onClick={captureImage}
                            className="captureBtn mt-5 rounded-full w-20 h-20"
                        ><p className="text-slate-300">O</p></button>
                    </div>
                )}
                {isImage && !isCamera && (
                    <img src={imageSrc} alt="data" className="w-full h-full contain-content" />
                )}
                <canvas ref={canvasRef} className="hidden"></canvas>
            </div>
            {!isImage && !isCamera && (
                <div className="flex justify-center w-full text-[#18181B]">
                    <button
                        className='btn mt-16 boxer flex items-center justify-center gap-3 camera-btn w-full'
                        style={{
                            fontSize: '18px',
                            fontWeight: 'inherit',
                            borderRadius: '30px',
                            backgroundColor: 'blue',
                            padding: '15px 30px'
                        }}
                        onClick={handleCameraClick}
                    >
                        <CiCamera className="text-[#18181B]" />
                        <span className="text-[#18181B]">Camera</span>
                    </button>
                </div>
            )}
            {isLoading ? (
                <div className="mt-16">
                    <Skeleton />
                </div>
            ) : (
                <div className="mt-16 mb-10">
                    {isResShow && (
                        <div className="w-full px-8 py-5 ">
                            <h1 className="flex gap-2">
                                <strong>Description:</strong>
                                <p className="first-letter:capitalize">{predictions.description}</p>
                                <br />
                            </h1>
                            <strong>Score:</strong> {predictions.score} <br />
                            <strong>Summary:</strong><TypeWriter text={predictions.wiki_summary} /> <br />
                        </div>
                    )}
                </div>
            )}
            {!isImage &&<div className="text-slate-300 mt-20">
                <hr className="border-slate-200 mt-20 sm:mt-2" />
                <h3 className="subhead-text mt-10">Upload Your Image</h3>
                <p className="w-full mt-5 first-letter:text-3xl sm:first-letter:text-5xl">
                    Upload an image directly from your device, or simply drag and drop it into the container below. You can also use your camera to capture an image in real-time by clicking the button provided. Our app will instantly recognize the image and generate detailed information about it.
                </p>
                <h3 className="subhead-text mt-10">How It Works:</h3>
                <div className="my-10">
                    <HomeCard />
                </div>
                <h3 className="subhead-text text-slate-300">Tips for Best Results:</h3>
                <ul className="list-disc my-10 pl-5">
                    <li>Ensure your image is clear and well-lit.</li>
                    <li>Avoid blurry or low-resolution photos for more accurate results.</li>
                    <li>Experiment with different angles and distances for varied insights.</li>
                </ul>
                <h3 className="subhead-text text-slate-300">Start Exploring:</h3>
                <p className="w-full mt-5 my-10 sm:first-letter:text-5xl">
                    Get started by uploading or capturing your image now. Discover a world of information with just one click!
                </p>
            </div> }
        </div>
    );
};

export default Home;
