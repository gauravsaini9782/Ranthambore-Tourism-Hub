import React from 'react';
import { FaMapSigns, FaCar, FaPrayingHands, FaHeartbeat } from 'react-icons/fa';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <div className="services-container">
      <h2>We Offer Best Services</h2>
      <div className="services-cards">
        <div className="card">
          <FaMapSigns className="card-icon" />
          <h3>Guided Tours</h3>
        </div>
        <div className="card">
          <FaCar className="card-icon" />
          <h3>Best Travel Option</h3>
        </div>
        <div className="card">
          <FaPrayingHands className="card-icon" />
          <h3>Religious Tours</h3>
        </div>
        <div className="card">
          <FaHeartbeat className="card-icon" />
          <h3>Medical Insurance</h3>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
