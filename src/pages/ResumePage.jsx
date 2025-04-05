import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
    return (
        <div className="resume-page">
            <h2>My Resume</h2>
            {/* Add your resume content here */}
            <p>Education:</p>
            <ul>
                <li>Degree in Fine Arts from Montecero Community College</li>
            </ul>
            <p>Experience:</p>
            <ul>
                <li>Model and Actor based in France</li>
            </ul>
        </div>
    );
};

export default ResumePage;