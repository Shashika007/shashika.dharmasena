// src/components/ImageCarousel.jsx
import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e) => {
        e.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e) => {
        e.stopPropagation();
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex, e) => {
        e.stopPropagation();
        setCurrentIndex(slideIndex);
    };

    // If there's only one image, just show it without carousel controls
    if (!images || images.length <= 1) {
        return (
            <div className="carousel-container">
                <img src={images && images.length > 0 ? images[0] : ''} alt={title || 'Project image'} />
            </div>
        );
    }

    return (
        <div className="carousel-container">
            <div className="carousel-image">
                <img src={images[currentIndex]} alt={`${title || 'Project'} - ${currentIndex + 1}`} />
            </div>

            <div className="carousel-controls">
                <button className="carousel-arrow left-arrow" onClick={goToPrevious}>
                    &#10094;
                </button>
                <div className="carousel-dots">
                    {images.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`carousel-dot ${slideIndex === currentIndex ? 'active' : ''}`}
                            onClick={(e) => goToSlide(slideIndex, e)}
                        />
                    ))}
                </div>
                <button className="carousel-arrow right-arrow" onClick={goToNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;