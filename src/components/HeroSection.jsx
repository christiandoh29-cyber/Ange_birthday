import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './HeroSection.css';

const HeroSection = ({ onNext }) => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        {data.heroBackground?.type === 'video' && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
          >
            <source src={data.heroBackground.src} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        )}
        {data.heroBackground?.type === 'image' && (
          <div
            className="background-image"
            style={{ backgroundImage: `url(${data.heroBackground.src})` }}
          />
        )}
        {/* Fallback to default if no background specified */}
        {!data.heroBackground && (
          <div className="background-image" style={{ backgroundImage: 'url(/assets/images/photo1.webp)' }} />
        )}
        <div className="background-overlay"></div>
      </div>
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="hero-title"
        >
          Pour la femme qui illumine ma vie ✨
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="hero-subtitle"
        >
          Joyeux anniversaire mon amour ❤️
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
          onClick={onNext}
          className="cta-button"
        >
          Continuer notre histoire
        </motion.button>
      </div>
      {/* Particle effect placeholder */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;