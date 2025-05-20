
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const companyName = "T3RN DESENVOLVIMENTO";
  
  useEffect(() => {
    if (fullScreen) {
      // Typing effect for company name
      const typingInterval = setInterval(() => {
        setLetterIndex(prev => {
          if (prev >= companyName.length) {
            // Reset after a brief pause when complete
            setTimeout(() => {
              setAnimationComplete(true);
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
      
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
        <div className="relative flex flex-col items-center">
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotateY: [0, 360],
            }}
            transition={{ 
              duration: 1.5, 
              rotateY: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
            className="relative mb-8"
          >
            {/* T3RN Logo - Shield with 3D effect */}
            <div className="w-24 h-24 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-600 rounded-b-lg shadow-xl"
                style={{ 
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span 
                    className="text-black font-bold text-4xl"
                    animate={{ 
                      textShadow: ["0px 0px 5px rgba(255,255,255,0.5)", "0px 0px 20px rgba(255,255,255,0.8)", "0px 0px 5px rgba(255,255,255,0.5)"]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    T3
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Sparkle effects around the logo */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ 
                  opacity: [0, 1, 0],
                  rotate: [0, 90]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="text-t3rn-highlight h-6 w-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2"
                animate={{ 
                  opacity: [0, 1, 0],
                  rotate: [0, -90]
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Sparkles className="text-t3rn-blue h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Pulse ring animation */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0], 
              scale: [0.8, 2]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            style={{
              border: "2px solid rgba(139, 92, 246, 0.5)",
              zIndex: -1
            }}
          />
          
          {/* Custom loader animation */}
          <motion.div 
            className="w-16 h-16 mb-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 border-4 border-t-t3rn-highlight border-r-t3rn-blue border-b-t3rn-orange border-l-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear"
              }}
            />
          </motion.div>
          
          {/* Company name with typing effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
          >
            <div className="font-bold text-2xl font-mono relative mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-t3rn-highlight via-t3rn-blue to-t3rn-orange">
                {companyName.substring(0, letterIndex)}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>|</span>
              </span>
            </div>
            
            {/* Progress bar that fills as the text is typed */}
            <div className="w-full max-w-xs bg-gray-800 h-1 rounded-full overflow-hidden mt-2">
              <motion.div 
                className="h-full bg-gradient-to-r from-t3rn-highlight to-t3rn-blue"
                style={{ 
                  width: `${(letterIndex / companyName.length) * 100}%`,
                  transition: "width 0.1s ease-in-out"
                }}
              />
            </div>
            
            <motion.p 
              className="mt-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: animationComplete ? 1 : 0, 
                y: animationComplete ? 0 : 10 
              }}
              transition={{ duration: 0.5 }}
            >
              Iniciando sua experiência digital...
            </motion.p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Regular spinner for non-fullscreen usage
  return (
    <div className="relative">
      <motion.div 
        className="border-4 border-t-t3rn-highlight border-r-t3rn-blue border-b-t3rn-orange border-l-transparent rounded-full w-10 h-10"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default LoadingSpinner;
