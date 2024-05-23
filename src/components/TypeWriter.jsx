import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 10 }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>
        { text ?
        displayedText
        : <p>No Result Found</p>
        }</span>;
};

export default Typewriter;
