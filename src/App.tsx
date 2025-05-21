import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Message from './components/Message';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BalloonContainer from './components/Balloon';

function App() {
  useEffect(() => {
    // Set the page title when the component mounts
    document.title = "Selamat Ulang Tahun Titi Adila!";
    
    // Optional: Play background music automatically
    // This requires user interaction in most browsers
    const playBackgroundMusic = () => {
      // Implementation would go here if we had an audio element
    };
    
    // Attach event listener for first user interaction
    const handleUserInteraction = () => {
      playBackgroundMusic();
      document.removeEventListener('click', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <BalloonContainer />
      <Header />
      <Hero />
      <Message />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;