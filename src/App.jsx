import React, { useState, useRef, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Work from "./components/Education";
import Contact from "./components/Contact";
import backgroundMusic from './assets/Music/background.wav';

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="font-light text-white antialiased selection:bg-lime-300 selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <About />
      <Work />
      <Contact />
      <button 
        onClick={togglePlay} 
        className="fixed top-5 left-5 px-4 py-2 text-lg bg-black text-white rounded-md cursor-pointer transition-transform transform hover:scale-110 active:scale-95"
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <audio ref={audioRef} src={backgroundMusic} loop />
    </main>
  );
}

export default App;