import React from 'react';
import './BackButton.css';

const BackButton = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick} aria-label="Retour">
      Retour
    </button>
  );
};

export default BackButton;