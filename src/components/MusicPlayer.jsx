import React, { useState, useEffect, useRef, useCallback } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(1);
  const audioRef = useRef(null);
  const switchTimerRef = useRef(null);
  const switchTimerActiveRef = useRef(false);

  const tracks = [
    { src: '/assets/music/background.mp3', duration: 60000, label: 'Musique 1' },
    { src: '/assets/music/music2.mp3', label: 'Musique 2' },
  ];

  const switchToTrack = useCallback((trackIndex) => {
    if (!audioRef.current) return;
    const wasPlaying = isPlaying;

    audioRef.current.pause();
    audioRef.current.onended = null;

    const newAudio = new Audio(tracks[trackIndex - 1].src);
    newAudio.loop = true;
    newAudio.volume = volume;
    newAudio.preload = 'auto';
    audioRef.current = newAudio;
    setCurrentTrack(trackIndex);
    switchTimerActiveRef.current = false;

    if (wasPlaying) {
      newAudio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, [isPlaying, volume, tracks]);

  const startSwitchTimer = useCallback(() => {
    if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
    switchTimerActiveRef.current = true;
    switchTimerRef.current = setTimeout(() => {
      switchToTrack(2);
    }, tracks[0].duration);
  }, [switchToTrack, tracks]);

  // Create audio for first track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(tracks[0].src);
    audio.loop = false;
    audio.volume = volume;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
      switchTimerActiveRef.current = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Listen for first user interaction to start audio
  useEffect(() => {
    const playOnInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            startSwitchTimer();
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
  }, [hasInteracted, startSwitchTimer]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
        switchTimerActiveRef.current = false;
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            if (currentTrack === 1 && !switchTimerActiveRef.current) {
              startSwitchTimer();
            }
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
        {isPlaying ? '||' : '>'}
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
        <div className="music-tooltip-top">Touchez pour jouer la musique</div>
      )}
      {hasInteracted && !isPlaying && (
        <div className="music-tooltip-top">Touchez pour reprendre la musique</div>
      )}
      {hasInteracted && isPlaying && (
        <div className="music-track-label">{currentTrack === 1 ? 'Musique 1/2' : 'Musique 2/2'}</div>
      )}
    </div>
  );
};

export default MusicPlayer;