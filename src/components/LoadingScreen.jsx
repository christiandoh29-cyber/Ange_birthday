import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loader"></div>
        <p className="loading-text">Préparation des souvenirs...</p>
        <p className="loading-text">Chargement des moments précieux...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;