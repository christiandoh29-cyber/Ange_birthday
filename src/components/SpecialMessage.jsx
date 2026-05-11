import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import { assetPath } from '../utils/paths';
import './SpecialMessage.css';

const SpecialMessage = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < data.specialMessage.length) {
      const currentLine = data.specialMessage[lineIndex];
      if (charIndex < currentLine.length) {
        setTimeout(() => {
          setDisplayedText(prev => prev + currentLine.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        setTimeout(() => {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
          if (lineIndex < data.specialMessage.length - 1) {
            setDisplayedText(prev => prev + '\n');
          }
        }, 1500);
      }
    }
  }, [lineIndex, charIndex]);

  useEffect(() => {
    setDisplayedText('');
    setLineIndex(0);
    setCharIndex(0);
  }, []);

  const bgVideoSrc = data.galleryVideos?.length > 0 ? assetPath(data.galleryVideos[0]) : null;

  return (
    <section className="special-message-section">
      <div className="message-background">
        {bgVideoSrc && (
          <video className="message-bg-video" autoPlay muted loop playsInline>
            <source src={bgVideoSrc} type="video/mp4" />
          </video>
        )}
        <div className="message-bg-overlay" />
      </div>

      <div className="message-scroll-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="section-title"
        >
          Un message pour toi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="message-text"
        >
          <pre className="typing-text">{displayedText}</pre>
        </motion.div>

        {lineIndex >= data.specialMessage.length && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            onClick={onNext}
            className="message-next-button"
          >
            Continuer notre journee
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default SpecialMessage;