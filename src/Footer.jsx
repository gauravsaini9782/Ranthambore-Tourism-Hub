import React from 'react';
import './Footer.css';
import logo from '/images/Ranthambore Tourism Hub (1).png'; // Ensure you have your logo file in the correct path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Ranthambore Travel" />
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Ranthambore, Sawai Madhopur, Rajasthan, India
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +91 12345 67890
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@example.com
          </p>
          <button className="contact-now-button">Contact Now</button>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Ranthambore Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

