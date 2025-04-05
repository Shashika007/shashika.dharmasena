// src/components/AboutMe.jsx
import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2><FontAwesomeIcon icon={faRobot} style={{marginRight: '10px'}} /> About Me</h2>
            <p>
                As a Senior AI and Robotics Engineer based in Taipei, I'm driven by a passion for building intelligent systems that solve real-world problems. My international experience, including time in Thailand, has shaped my adaptable and results-oriented approach to innovation.
            </p>
            <p>
                I specialize in developing Generative AI applications that enhance existing systems and unlock new possibilities, currently focusing on hybrid search engine solutions for retail. Beyond Generative AI, I bring deep expertise in Voice AI technologies like TTS, STT, and LLM-powered chatbots.
            </p>
            <p>
                I'm also adept at vision and LiDAR-based robotics – from localization and navigation to overall control. I'm a proven leader and project manager, committed to delivering efficient and impactful solutions.
            </p>
        </div>
    );
};

export default AboutMe;