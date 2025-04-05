// src/components/TalkToMeButton.jsx
import React, { useState } from 'react';
import Chatbot from './Chatbot';  // Corrected import
import './TalkToMeButton.css';

const TalkToMeButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="talk-to-me" onClick={toggleChat}>
                Talk to me
            </button>
            {isOpen && <Chatbot isOpen={isOpen} onClose={toggleChat} />}
        </>
    );
};

export default TalkToMeButton;