import React from 'react';
import { FaCar, FaHotel, FaMapMarkedAlt, FaMoneyBillWave, FaTicketAlt, FaUserFriends } from 'react-icons/fa';
import './ServicesOverviewSection.css';

function ServicesOverviewSection() {
  return (
    <div className='outer-service'>
      <div className="services-overview-container">
      <h2 className="services-heading">Travel Made Easy: All Your Trip Essentials in One Place!</h2>
      
      <div className="services-content">
        {/* Left Side: Image with Description */}
        <div className="services-image-container">
         <div>
         <img src="/images/hand-drawn-sustainable-travel-illustration.png" alt="Ranthambore Overview" className="overview-image" /> {/* Replace with actual image */}
         </div>
          <div className="image-description">
            <p>
              <h3>Make Your Trip Easy With Us....</h3>
            Discover the best of Ranthambore with our all-in-one services, including car rentals, hotel bookings, guided tours, and immersive cultural experiences—all at budget-friendly prices. 
            </p>
          </div>
        </div>
        
        {/* Right Side: Services List */}
        <div className="services-list">
          <div className="service-item">
            <FaCar className="service-icon" />
            <div>
              <h3>Car on Rent</h3>
              <p>Convenient and affordable car rental options to explore Ranthambore at your pace.</p>
            </div>
          </div>

          <div className="service-item">
            <FaHotel className="service-icon" />
            <div>
              <h3>Hotels</h3>
              <p>Book the best hotels with comfortable amenities for a relaxing stay.</p>
            </div>
          </div>

          <div className="service-item">
            <FaMapMarkedAlt className="service-icon" />
            <div>
              <h3>Best Destinations</h3>
              <p>Explore top-rated destinations with our curated tour packages.</p>
            </div>
          </div>

          <div className="service-item">
            <FaMoneyBillWave className="service-icon" />
            <div>
              <h3>Low Budgets</h3>
              <p>Enjoy premium services at the most competitive prices.</p>
            </div>
          </div>

          <div className="service-item">
            <FaTicketAlt className="service-icon" />
            <div>
              <h3>Sanctuary Tickets</h3>
              <p>Get easy access to wildlife sanctuary tickets for a thrilling experience.</p>
            </div>
          </div>

          <div className="service-item">
            <FaUserFriends className="service-icon" />
            <div>
              <h3>Guides for Tours</h3>
              <p>Expert guides to provide detailed information about each tour.</p>
            </div>
          </div>

          <div className="service-item">
            <FaUserFriends className="service-icon" />
            <div>
              <h3>Rajasthani Culture Feels</h3>
              <p>Immerse yourself in authentic Rajasthani culture and traditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ServicesOverviewSection;


