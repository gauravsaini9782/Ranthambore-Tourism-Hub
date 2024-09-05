import React from 'react';
import './TourPackagesSection.css';

function TourPackagesSection() {
  const packages = [
    {
      title: 'Wildlife Safari',
      image: '/images/240_F_265136456_5ybCld832gy6iVYfwVvSlGCd36zDgAKc.jpg', // Replace with actual image URL
      price: '₹5000',
      offer: '₹4500',
      description: 'Experience the thrill of a guided safari through Ranthambore National Park.'
    },
    {
      title: 'Historical Fort Tour',
      image: '/images/free-photo-of-tiger-standing-in-forest.jpeg', // Replace with actual image URL
      price: '₹4000',
      offer: '₹3500',
      description: 'Discover the ancient Ranthambore Fort and its rich history.'
    },
    {
      title: 'Cultural Village Tour',
      image: '/images/istockphoto-1191534503-1024x1024.jpg', // Replace with actual image URL
      price: '₹3000',
      offer: '₹2700',
      description: 'Immerse yourself in the local culture with a visit to nearby villages.'
    },
    {
      title: 'Luxury Stay Package',
      image: '/images/240_F_273328608_0HBefwdKFFWUBb93DjJiQShjF4Mjc77T.jpg', // Replace with actual image URL
      price: '₹10000',
      offer: '₹9000',
      description: 'Enjoy a luxurious stay in the heart of nature with top-notch amenities.'
    },
    {
      title: 'Bird Watching Tour',
      image: '/images/240_F_265136456_5ybCld832gy6iVYfwVvSlGCd36zDgAKc.jpg', // Replace with actual image URL
      price: '₹4000',
      offer: '₹3500',
      description: 'Explore the diverse bird species in Ranthambore.'
    },
    {
      title: 'Pilgrimage Tour',
      image: '/images/amazing-bengal-tiger-nature_475641-1189.avif', // Replace with actual image URL
      price: '₹6000',
      offer: '₹5500',
      description: 'Visit the sacred temples and religious sites around Ranthambore.'
    },
    {
      title: 'Photography Tour',
      image: '/images/pexels-photo-2926038.jpeg', // Replace with actual image URL
      price: '₹7000',
      offer: '₹6500',
      description: 'Capture the breathtaking beauty of Ranthambore with a professional photography tour.'
    },
    {
      title: 'Night Safari',
      image: '/images/amazing-bengal-tiger-nature_475641-1189.avif', // Replace with actual image URL
      price: '₹8000',
      offer: '₹7500',
      description: 'Experience the wild nightlife of Ranthambore with a thrilling night safari.'
    },
  ];

  return (
    <div className='outer outer-tour-package'>
      <div className="tour-packages-container inner">
      <h2>We Provide You Best Ranthambore Sightseeing Tours</h2>
      <p>Explore the rich wildlife, historic fortresses, and scenic landscapes with our expertly crafted tour packages. Whether you're looking for adventure, relaxation, or cultural immersion, we have the perfect package for you.</p>
      <div className="tour-cards">
        {packages.map((pkg, index) => (
          <div className="tour-card" key={index}>
            <img src={pkg.image} alt={pkg.title} className="tour-card-image" />
            <h3>{pkg.title}</h3>
            <p className="tour-card-price">
              <span className="original-price">{pkg.price}</span> <span className="offer-price">{pkg.offer}</span>
            </p>
            <p>{pkg.description}</p>
            <button className="view-package-button">View Package</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TourPackagesSection;

