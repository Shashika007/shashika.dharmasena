import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
    return (
        <div className="portfolio-page">
            <h2>My Portfolio</h2>
            {/* Add your portfolio items here */}
            <div className="portfolio-item">
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
            </div>
            <div className="portfolio-item">
                <h3>Project 2</h3>
                <p>Description of Project 2</p>
            </div>
        </div>
    );
};

export default PortfolioPage;