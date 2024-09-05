// src/ImageGallery.js
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./ImageGallery.css";



const images = [
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
  "/images/amazing-bengal-tiger-nature_475641-1261.jpg",
];



const ImageGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
        </div>
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
    
  );
};

export default ImageGallery;


