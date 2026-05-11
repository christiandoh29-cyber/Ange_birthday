import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/content.json';
import './GallerySection.css';

const GallerySection = ({ onNext }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const allMedia = [
    ...data.slides.map((s, i) => ({ ...s, type: 'image', id: `img-${i}` })),
    ...data.galleryVideos.map((v, i) => ({
      image: v,
      title: `Video ${i + 1}`,
      description: '',
      type: 'video',
      id: `vid-${i}`,
    })),
  ];

  const openMedia = (index) => setSelectedIndex(index);
  const closeMedia = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex < allMedia.length - 1) setSelectedIndex(selectedIndex + 1);
  };
  const goPrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="gallery-title"
        >
          Nos Moments Precieux
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="gallery-subtitle"
        >
          Chaque photo et video raconte notre histoire
        </motion.p>
      </div>

      <div className="gallery-grid">
        {allMedia.map((item, index) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.04, ease: 'easeOut' }}
            className="gallery-item"
            onClick={() => openMedia(index)}
          >
            {item.type === 'video' ? (
              <video className="gallery-img" muted loop playsInline>
                <source src={item.image} type="video/mp4" />
              </video>
            ) : (
              <img src={item.image} alt={item.title} className="gallery-img" />
            )}
            <div className="gallery-caption">
              <span className="caption-type">{item.type === 'video' ? 'Video' : 'Photo'}</span>
              <span className="caption-title">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeMedia}>X</button>
              {selectedIndex > 0 && (
                <button className="modal-nav modal-prev" onClick={goPrev}>
                  <span>◀</span>
                </button>
              )}
              {selectedIndex < allMedia.length - 1 && (
                <button className="modal-nav modal-next" onClick={goNext}>
                  <span>▶</span>
                </button>
              )}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="modal-media-wrapper"
              >
                {allMedia[selectedIndex].type === 'video' ? (
                  <video className="modal-media" controls autoPlay muted>
                    <source src={allMedia[selectedIndex].image} type="video/mp4" />
                  </video>
                ) : (
                  <img src={allMedia[selectedIndex].image} alt={allMedia[selectedIndex].title} className="modal-media" />
                )}
                <div className="modal-info">
                  <h3 className="modal-title">{allMedia[selectedIndex].title}</h3>
                  {allMedia[selectedIndex].description && (
                    <p className="modal-description">{allMedia[selectedIndex].description}</p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        onClick={onNext}
        className="gallery-next-button"
      >
        Decouvrir notre message
      </motion.button>
    </section>
  );
};

export default GallerySection;