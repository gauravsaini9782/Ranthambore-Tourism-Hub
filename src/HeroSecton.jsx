import React from 'react';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className="hero-container">
      <header className="header">
        <div className="inner-header">
          {/* Updated Logo Section */}
          <div className="logo">
            <img src='/images/Ranthambore Tourism Hub (1).png' alt="Ranthambore Travel" />
          </div>
          
          {/* Updated Navigation */}
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#packages">Upcoming Packages</a>
          </nav>
          
          {/* Updated Button */}
          <button className="get-in-touch">
  <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
  Contact now
</button>
        </div>
      </header>

      {/* Hero Content Section */}
      <div className="hero-content">
        <h1>Welcome to Ranthambore Tourism Hub</h1>
        <p>
        "Explore Ranthambore: All-in-One Travel Solutions"</p>
      </div>
    </div>
  );
}

export default HeroSection;

