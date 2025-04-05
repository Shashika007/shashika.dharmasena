// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Updated import statement
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function App() {
    return (
        <Router basename="/shashika.dharmasena">
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;