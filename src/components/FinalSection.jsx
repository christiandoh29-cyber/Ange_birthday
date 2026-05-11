import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './FinalSection.css';

const FinalSection = () => {
  return (
    <section className="final-section">
      <div className="final-background">
        {data.finalBackground?.type === 'video' && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
          >
            <source src={data.finalBackground.src} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        )}
        {data.finalBackground?.type === 'image' && (
          <div
            className="background-image"
            style={{ backgroundImage: `url(${data.finalBackground.src})` }}
          />
        )}
        {/* Fallback to default if no background specified */}
        {!data.finalBackground && (
          <div className="background-image" style={{ backgroundImage: 'url(/assets/images/photo11.jpeg)' }} />
        )}
        <div className="background-layer"></div>
      </div>
      <div className="final-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="final-title"
        >
          Et ce n’est que le début...
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="final-subtitle"
        >
          Je t’aime ❤️
        </motion.p>
        {/* Confetti and particles container */}
        <div className="effects-container">
          {/* Confetti will be added via CSS animation or a library, but for simplicity we'll use CSS */}
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;