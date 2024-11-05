import React from 'react';
import { motion } from 'framer-motion';

const UniqueLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        className="loader"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        exit={{ scale: 0.8, rotate: 0 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </motion.div>

      <style jsx>{`
        .loader {
          display: flex;
          align-items: center;
        }
        .dot {
          width: 20px;
          height: 20px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: #84cc16; /* Lime 300 */
          animation: bounce 0.6s infinite alternate;
        }
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
};

export default UniqueLoading;
