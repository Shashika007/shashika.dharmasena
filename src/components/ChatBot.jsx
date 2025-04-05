// src/components/ChatBot.jsx
import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { text: 'Hi, I am Chat, your virtual assistant for today. How can I help you?', sender: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
            // Simulate bot response
            setTimeout(() => {
                setMessages([
                    ...messages,
                    { text: 'Great! Would you prefer new or used?', sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className={`chatbot ${isOpen ? 'open' : ''}`}>
            <div className="chat-header">
                <h3>Chat</h3>
                <button onClick={onClose}>X</button>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="chat-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;