import React, { useState, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = ({ onUserInteract }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = React.useRef(null);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio('/assets/music/background.mp3');
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.oncanplaythrough = () => setIsReady(true);
    audio.onerror = () => setIsReady(false);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Listen for first user interaction on the document to start audio
  useEffect(() => {
    const playOnInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {});
      }
    };

    document.addEventListener('click', playOnInteraction, { once: true });
    document.addEventListener('touchstart', playOnInteraction, { once: true });

    return () => {
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {});
      }
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <div className="music-player-top">
      <button 
        onClick={togglePlay}
        className={`music-button ${isPlaying ? 'playing' : ''} ${!hasInteracted && 'pulsing'}`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause musique' : 'Jouer musique'}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <div className="volume-control-top">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange}
          aria-label="Volume control"
        />
      </div>
      {!isPlaying && !hasInteracted && (
        <div className="music-tooltip-top">
          Touchez pour jouer la musique
        </div>
      )}
      {hasInteracted && !isPlaying && (
        <div className="music-tooltip-top">
          Touchez pour reprendre la musique
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;