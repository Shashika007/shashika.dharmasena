// src/components/FaceButton.jsx
import React from 'react';
import './FaceButton.css'; // Create FaceButton.css
import profileImage from '/shashika.dharmasena/assets/shashika.jpg'; // Import your profile image

const FaceButton = ({ onClick }) => {
    return (
        <button className="face-button" onClick={onClick}>
            <div className="face-image-wrapper">
                <img src={profileImage} alt="Your Profile" className="face-image" />
                <div className="animated-ring"></div>
            </div>
            Talk to me
        </button>
    );
};

export default FaceButton;