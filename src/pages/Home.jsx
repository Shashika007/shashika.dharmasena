// src/pages/Home.jsx
import React, { useState } from 'react'; // Import useState
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import FaceButton from '../components/FaceButton'; // Import FaceButton
import ChatBot from '../components/ChatBot'; // Import ChatBot
import './Home.css';

const Home = () => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false); // State for chatbot visibility

    const toggleChatBot = () => {
        setIsChatBotOpen(!isChatBotOpen);
    };

    return (
        <div className="container">
            <div className="profile-section">
                <img src="/assets/shashika.jpg" alt="Profile" />
                <div>
                    <h1>Shashika Dharmasena</h1>
                    <p>Senior Engineer in Generative AI and Robotics</p>
                </div>
            </div>
            <AboutMe />
            <Resume />
            <Portfolio />
            <footer className="site-footer">
                <Contact />
            </footer>
            <FaceButton onClick={toggleChatBot} /> {/* Add the FaceButton */}
            <ChatBot isOpen={isChatBotOpen} onClose={toggleChatBot} /> {/* Add the ChatBot */}
        </div>
    );
};

export default Home;