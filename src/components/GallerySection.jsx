import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './GallerySection.css';

const GallerySection = ({ onNext }) => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="gallery-title"
        >
          Nos Moments Précieux
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="gallery-subtitle"
        >
          Chaque photo raconte notre histoire
        </motion.p>
      </div>
      
      <div className="gallery-grid">
        {data.galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
            className="gallery-item"
          >
            <img src={image} alt={"Gallery " + (index + 1)} className="gallery-img" />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="overlay-text"
                >
                  Moment spécial
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        onClick={onNext}
        className="gallery-next-button"
      >
        Découvrir notre message
      </motion.button>
    </section>
  );
};

export default GallerySection;