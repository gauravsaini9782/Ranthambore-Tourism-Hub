import React from 'react';
import HeroSection from './HeroSecton';
import ServicesSection from './ServicesSection';
import TourPackagesSection from './TourPackagesSection';
import ServicesOverviewSection from './ServicesOverviewSection';
import PopularDestinationsSection from './PopularDestinationsSection';
import ImageGallery from './ImageGallery';
import TestimonialsCarousel from './TestimonialsCarousel';
import Footer from './Footer';


function App() {
  
  return (
    <div className='container'>
      hey 
      <div className="App">
      <HeroSection />
      <ServicesSection/>
      <TourPackagesSection/>
      <ServicesOverviewSection/>
      <PopularDestinationsSection/>
      <ImageGallery/>
      <TestimonialsCarousel/>
      <Footer/>
    
    </div>
    </div>
  );
}

export default App;
