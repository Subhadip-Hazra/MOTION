import { Creativity,Productivity,Learn,ImageClick,Analysis, Generate, Github, Likedin, Facebook, Twitter } from "../assets/icons";

export const Help = [
    {
        imageUrl : Learn,
        index:1,
        heading : "Learn on the Go:",
        text: " Instantly obtain detailed information about objects, landmarks, plants, animals, and more."
    },
    {
        imageUrl : Productivity,
        index:2,
        heading : "Enhance Productivity:",
        text: " Quickly identify and categorize images for work or personal projects."
    },
    {
        imageUrl : Creativity,
        index:3,
        heading : "Boost Creativity:",
        text: "  Get inspired by discovering new insights about the images you capture."
    }
]

export const works = [
    {
        title:"Capture an Image:",
        icon:ImageClick,
        iconBg: "#accbe1",
        points:["Open the app and use your phone's camera to take a picture of any object or scene you're interested in."]
    },
    {
        title:"Image Detection:",
        icon:Analysis,
        iconBg: "#accbe1",
        points:["Once the image is captured, our advanced algorithms analyze it to identify key features and patterns."]
    },
    {
        title:"Generate Content:",
        icon:Generate,
        iconBg: "#accbe1",
        points:["Based on the analysis, the app generates detailed content about the image, including descriptions, related information, and useful links."]
    }
]

export const faqs = [
    {
        heading:"Accurate Results:",
        faq:"Our app boasts high accuracy rates, providing reliable information you can trust."
    },
    {
        heading:"User-Friendly Interface: ",
        faq:"Designed with simplicity in mind, our app is easy to navigate and use."
    },
    {
        heading:"Continuous Improvement:",
        faq:"We regularly update our algorithms and databases to enhance performance and expand our knowledge base."
    },
    {
        heading:"Secure and Private:  ",
        faq:"We prioritize your privacy and ensure that your data is secure with us."
    }
]


export const tips = [
    {
        imageUrl : Learn,
        index:1,
        heading : "Drag & Drop or Upload: ",
        text: " Place your image in the container below by dragging and dropping it, or click to upload from your device."
    },
    {
        imageUrl : Productivity,
        index:2,
        heading : "Use Your Camera:",
        text: ` Click the "Open Camera" button to capture a new image instantly.`
    },
    {
        imageUrl : Creativity,
        index:3,
        heading : "Upload Your Image",
        text: "  Upload an image directly from your device, or simply drag and drop it into the container below. You can also use your camera to capture an image in real-time by clicking the button provided. Our app will instantly recognize the image and generate detailed information about it."
    }
]


export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: Github,
        link: 'https://github.com/subhadip-hazra',
    },
    {
        name: 'LinkedIn',
        iconUrl: Likedin,
        link: 'https://www.linkedin.com/in/subhadip-hazra',
    },
    {
        name: 'Facebook',
        iconUrl: Facebook,
        link: 'https://www.facebook.com/subhadip.hazra.7169/',
    },
    {
        name: 'Instagram',
        iconUrl: Twitter,
        link: 'https://www.instagram.com/_subha__2002/',
    }
];