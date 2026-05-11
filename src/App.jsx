import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import StoryTimeline from './components/StoryTimeline';
import GallerySection from './components/GallerySection';
import SpecialMessage from './components/SpecialMessage';
import RelationshipCounter from './components/RelationshipCounter';
import FinalSection from './components/FinalSection';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6; // Loading + 5 main sections

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Determine which page to show
  let content;
  if (isLoading) {
    content = <LoadingScreen onComplete={() => setIsLoading(false)} />;
  } else {
    switch (currentPage) {
      case 0:
        content = <HeroSection onNext={handleNextPage} />;
        break;
      case 1:
        content = <StoryTimeline onNext={handleNextPage} />;
        break;
      case 2:
        content = <GallerySection onNext={handleNextPage} />;
        break;
      case 3:
        content = <SpecialMessage onNext={handleNextPage} />;
        break;
      case 4:
        content = <RelationshipCounter onNext={handleNextPage} />;
        break;
      case 5:
        content = <FinalSection />;
        break;
      default:
        content = <HeroSection onNext={handleNextPage} />;
    }
  }

  return (
    <div className="App">
      <MusicPlayer />
      {content}
    </div>
  );
}

export default App;