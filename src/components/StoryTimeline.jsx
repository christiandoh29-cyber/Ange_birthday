import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './StoryTimeline.css';

const StoryTimeline = ({ onNext }) => {
  // Initialize Swiper with effects
  useEffect(() => {
    // We'll initialize Swiper after the component mounts
    // The Swiper component from swiper/react handles initialization
  }, []);

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable mousewheel and keyboard control
    mousewheel: true,
    keyboard: true,
    // Autoplay with delay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // Speed for slide transitions
    speed: 1500,
    // Enable parallax effect
    parallax: true,
  };

  return (
    <section className="story-timeline">
      <div className="swiper-container">
        <Swiper {...swiperParams}>
          {data.slides.map((slide, index) => (
            <SwiperSlide key={index} className="story-slide">
              <div className="slide-background" 
                   style={{ 
                     backgroundImage: `url(${slide.image})`,
                     // Ken Burns effect: zoom and pan
                     transform: 'scale(1) translate(0, 0)',
                     // We'll animate this with framer-motion or GSAP in the CSS
                   }}>
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    className="slide-title"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                    className="slide-description"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Navigation buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        onClick={onNext}
        className="timeline-next-button"
      >
        Continuer vers la galerie
      </motion.button>
    </section>
  );
};

export default StoryTimeline;