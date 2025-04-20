// src/pages/Home.jsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar'; // Import NavBar
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import FaceButton from '../components/FaceButton';
import ChatBot from '../components/ChatBot';
import './Home.css';

const Home = () => {
    const [isChatBotOpen, setIsChatBotOpen] = useState(false);

    const toggleChatBot = () => {
        setIsChatBotOpen(!isChatBotOpen);
    };

    return (
        <>
            <NavBar /> {/* Add the NavBar */}
            <div className="container">
                <div className="profile-section" id="about">
                    <img src="/shashika.dharmasena/assets/shashika.jpg" alt="Profile" />
                    <div>
                        <h1>Shashika Dharmasena</h1>
                        <p>Senior Engineer in Generative AI and Robotics</p>
                    </div>
                </div>
                <AboutMe />
                <Resume />
                <Portfolio />
                <footer className="site-footer" id="contact">
                    <Contact />
                </footer>
                <FaceButton onClick={toggleChatBot} />
                <ChatBot isOpen={isChatBotOpen} onClose={toggleChatBot} />
            </div>
        </>
    );
};

export default Home;