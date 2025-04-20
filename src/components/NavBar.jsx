// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>SD</span>
            </div>
            <div className="navbar-links">
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                <Link to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link>
                <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;