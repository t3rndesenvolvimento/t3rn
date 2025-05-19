
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const companyName = "T3RN DESENVOLVIMENTO";
  
  useEffect(() => {
    if (fullScreen) {
      // Typing effect for company name
      const typingInterval = setInterval(() => {
        setLetterIndex(prev => {
          if (prev >= companyName.length) {
            // Reset after a brief pause when complete
            setTimeout(() => setLetterIndex(0), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 150);
      
      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }
  }, [fullScreen]);
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            {/* Logo T3RN animado */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border border-gray-600 flex items-center justify-center">
              <motion.span 
                className="text-white font-bold text-3xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                T3
              </motion.span>
            </div>
          </motion.div>
          
          <div className="loading-spinner mb-6"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-white h-16"
          >
            <div className="text-center font-bold text-2xl font-mono relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {companyName.substring(0, letterIndex)}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>|</span>
              </motion.span>
            </div>
            <p className="mt-4 text-sm text-gray-400">Carregando sua experiência...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Regular spinner for non-fullscreen usage
  return <div className="loading-spinner mx-auto"></div>;
};

export default LoadingSpinner;
