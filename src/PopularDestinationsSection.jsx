import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './PopularDestinationsSection.css';

const PopularDestinationsSection = () => {
  // Data for destinations
  const destinations = [
    {
      image: '/images/jaisalmer-fort.webp',
      name: 'Ranthambore National Park',
      description: 'Explore the wilderness of Ranthambore with guided tours and safaris.',
      rating: 4.5,
    },
    {
      image: '/images/jaisalmer-india-temple-gadi-sagar-lake-sunset-shutterstock_283721051.jpg_0d702c1afa.webp',
      name: 'Thar Desert',
      description: 'Experience the vast Thar Desert with camel rides and desert camps.',
      rating: 4.7,
    },
    {
      image: '/images/278a908c9d33950f59678ce5944c2e5b-jagniwas-island.webp',
      name: 'Jaisalmer Fort',
      description: 'Visit the iconic golden fortress of Jaisalmer and nearby attractions.',
      rating: 4.8,
    },
    {
      image: '/images/Arrows-Girl-Padam-Lake-Ranthambore-1620.webp',
      name: 'Jaipur City',
      description: 'Discover Jaipur’s historic palaces, forts, and colorful bazaars.',
      rating: 4.6,
    },
    {
      image: '/images/jaisalmer-fort.webp',
      name: 'Ranthambore National Park',
      description: 'Explore the wilderness of Ranthambore with guided tours and safaris.',
      rating: 4.5,
    },
    {
      image: '/images/jaisalmer-india-temple-gadi-sagar-lake-sunset-shutterstock_283721051.jpg_0d702c1afa.webp',
      name: 'Thar Desert',
      description: 'Experience the vast Thar Desert with camel rides and desert camps.',
      rating: 4.7,
    },
    {
      image: '/images/278a908c9d33950f59678ce5944c2e5b-jagniwas-island.webp',
      name: 'Jaisalmer Fort',
      description: 'Visit the iconic golden fortress of Jaisalmer and nearby attractions.',
      rating: 4.8,
    },
    {
      image: '/images/Arrows-Girl-Padam-Lake-Ranthambore-1620.webp',
      name: 'Jaipur City',
      description: 'Discover Jaipur’s historic palaces, forts, and colorful bazaars.',
      rating: 4.6,
    },
    // Add more destinations as needed
  ];

  // Render stars based on the rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <div className="stars">
        {Array.from({ length: fullStars }, (_, index) => (
          <FaStar key={index} className="star-icon" />
        ))}
        {halfStar && <FaStarHalfAlt className="star-icon" />}
      </div>
    );
  };

  return (
    <div className='outer'>
      <div className="popular-destinations-section">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div className="image-container">
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <div className="overlay">
                <button className="explore-button">Explore Now</button>
              </div>
            </div>
            <div className="destination-info">
              <h3 className="destination-name">{destination.name}</h3>
              <p className="destination-description">{destination.description}</p>
              {renderStars(destination.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PopularDestinationsSection;
