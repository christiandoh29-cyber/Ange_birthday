import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './SpecialMessage.css';

const SpecialMessage = ({ onNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < data.specialMessage.length) {
      const currentLine = data.specialMessage[lineIndex];
      if (charIndex < currentLine.length) {
        // Type next character
        setTimeout(() => {
          setDisplayedText(prev => prev + currentLine.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, 100); // Typing speed
      } else {
        // Line complete, wait a bit then move to next line
        setTimeout(() => {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
          // Add a newline after each line except the last
          if (lineIndex < data.specialMessage.length - 1) {
            setDisplayedText(prev => prev + '\n');
          }
        }, 1500); // Pause between lines
      }
    }
  }, [lineIndex, charIndex]);

  // Reset when component mounts or if we want to restart
  useEffect(() => {
    setDisplayedText('');
    setLineIndex(0);
    setCharIndex(0);
  }, []);

  return (
    <section className="special-message-section">
      <div className="message-container">
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
          className="message-box"
        >
          <pre className="typing-text">{displayedText}</pre>
        </motion.div>
        
        {/* Show continue button only when message is fully displayed */}
        {lineIndex >= data.specialMessage.length && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
            onClick={onNext}
            className="message-next-button"
          >
            Continuer notre journée
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default SpecialMessage;