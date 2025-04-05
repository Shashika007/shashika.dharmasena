// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';  // Import LinkedIn and Twitter icons


const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-buttons">
                <a href="mailto:shashika@gmail.com">
                    <button>
                        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                        Email Me
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/shashikadharmasena/" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                        LinkedIn
                    </button>
                </a>
                <a href="https://x.com/shaziichaz?s=21&t=-ufyw6ZtyqYlzhHN4T7dxA" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
                        Twitter
                    </button>
                </a>
                <button className="talk-to-me">Talk to me</button>
            </div>
        </div>
    );
};

export default Contact;