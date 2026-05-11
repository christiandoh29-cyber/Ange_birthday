import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './RelationshipCounter.css';

const RelationshipCounter = ({ onNext }) => {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date(data.relationshipStartDate);
    const today = new Date();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysTogether(days);
  }, []);

  const [animatedDays, setAnimatedDays] = useState(0);

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();
    const duration = 2000;

    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * daysTogether);
      setAnimatedDays(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    }

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [daysTogether]);

  return (
    <section className="counter-section">
      {/* Video background */}
      <div className="counter-video-bg">
        <video className="counter-video-player" autoPlay muted loop playsInline>
          <source src="/assets/videos/video4.mp4" type="video/mp4" />
        </video>
        <div className="counter-video-overlay" />
      </div>

      <div className="counter-video-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="counter-title"
        >
          Notre Journee Ensemble
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="counter-display"
        >
          <div className="counter-value">
            <span className="number">{animatedDays}</span>
            <span className="label">jours</span>
          </div>
          <p className="counter-description">
            Depuis le 31 Janvier 2025
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          onClick={onNext}
          className="counter-cta-button"
        >
          Voir notre avenir
        </motion.button>
      </div>
    </section>
  );
};

export default RelationshipCounter;