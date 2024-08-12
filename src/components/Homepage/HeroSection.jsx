import React, { useState, useEffect } from 'react';
function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const images = [
      './images/image1.jpg',
      './images/image2.jpg',
      './images/image3.jpg',
      './images/image4.jpeg',
      './images/image5.jpg',
      './images/image6.jpg',
      './images/image7.jpg',
      './images/image8.jpeg',
      './images/image9.jpg',
    ];
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
      <div className="hero-section" id="home">
        <div className="hero-content">
          <h2>Connecting Donors with Those in Need</h2>
          <p>Every drop counts. Donate blood and save lives.</p>
          <button className="hero-btn">Join Us</button>
        </div>
        <div className="hero-image">
          <img src={images[currentSlide]} alt="Blood donation" />
        </div>
      </div>
    );
  }
  export default HeroSection;