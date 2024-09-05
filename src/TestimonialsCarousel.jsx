import React, { useState, useEffect } from 'react';
import './TestimonialsCarousel.css';

const testimonialsData = [
  {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'This is the best travel experience I have ever had. Highly recommend it!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Amazing services and great support throughout the journey.',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: 'Had a wonderful time exploring new destinations. Would love to come back!',
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="testimonials-carousel">
      <h2 className="carousel-title">What Our Customers Say</h2>
      <div className="carousel-wrapper">
        <button className="carousel-control prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <div className="testimonial-card">
          <img
            src={testimonialsData[currentIndex].image}
            alt={testimonialsData[currentIndex].name}
            className="testimonial-image"
          />
          <h3 className="testimonial-name">{testimonialsData[currentIndex].name}</h3>
          <p className="testimonial-text">"{testimonialsData[currentIndex].text}"</p>
          <div className="testimonial-rating">
            {'★'.repeat(testimonialsData[currentIndex].rating)}
            {'☆'.repeat(5 - testimonialsData[currentIndex].rating)}
          </div>
        </div>
        <button className="carousel-control next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      <div className="carousel-indicators">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
