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
        className={`p-4 rounded-full bg-lime-500 text-black shadow-lg transition-all duration-300 transform hover:bg-lime-400 active:scale-90`}
        whileHover={{ scale: 1.2, rotate: 15 }}
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
