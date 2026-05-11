import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import data from '../data/content.json';
import './StoryTimeline.css';

const StoryTimeline = ({ onNext }) => {
  const videos = data.galleryVideos || [];

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
    mousewheel: true,
    keyboard: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1500,
  };

  return (
    <section className="story-timeline">
      {/* Video background grid */}
      <div className="story-video-grid">
        {videos.map((video, i) => (
          <div key={i} className="story-video-cell">
            <video
              className="story-video-player"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="story-video-overlay" />
          </div>
        ))}
      </div>

      {/* Overlay with slideshow content + centered button */}
      <div className="story-overlay-content">
        <div className="swiper-container">
          <Swiper {...swiperParams}>
            {data.slides.map((slide, index) => (
              <SwiperSlide key={index} className="story-slide">
                <div className="slide-content-wrapper">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                    className="slide-title"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                    className="slide-description"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

        {/* Centered continue button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9, ease: 'easeOut' }}
          className="story-button-container"
        >
          <button onClick={onNext} className="story-cta-button">
            Continuer vers la galerie
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryTimeline;