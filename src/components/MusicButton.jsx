import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import backgroundMusic from '../assets/Music/background.wav'; // Ensure this path is correct

const MusicButton = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set volume to 20%
      audioRef.current.play(); // Automatically play on page load
      setIsPlaying(true);
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
    <div className="fixed top-5 left-5">
      <motion.button
        onClick={togglePlay}
        className="relative p-4 rounded-full bg-gradient-to-r from-lime-400 to-lime-600 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence>
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaPause className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaPlay className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <audio ref={audioRef} src={backgroundMusic} loop />
    </div>
  );
};

export default MusicButton;
