import React, { useState } from 'react';
// import './Slider.css'; // Import CSS file for styles

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button onClick={goToPrevious} className="control-button">Previous</button>
      <div className="slider-image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button onClick={goToNext} className="control-button">Next</button>
      
    </div>
  );
};

export default Slider;
