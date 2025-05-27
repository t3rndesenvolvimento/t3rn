
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const loadingSteps = [
    "Initializing system...",
    "Loading modules...",
    "Verifying connections...",
    "Preparing interface...",
    "Finalizing..."
  ];

  useEffect(() => {
    if (fullScreen) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 2;
          
          // Update step based on progress
          const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
          setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
          
          if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [fullScreen]);
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 tech-grid" />
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-brand-purple-500 rounded-full animate-ping opacity-60" />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-brand-orange-500 rounded-full animate-pulse opacity-40" />
          <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-brand-blue-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative flex flex-col items-center max-w-md mx-auto px-8">
          {/* Modern logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="w-24 h-24 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-brand-purple-500 to-brand-purple-700 rounded-xl shadow-2xl backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.6)",
                    "0 0 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl font-cashDisplay">T3</span>
                </div>
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-xl border border-brand-purple-400/50 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Company name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-2 font-cashDisplay">T3RN</h1>
            <p className="text-brand-purple-400 text-lg font-medium tracking-wider">DESENVOLVIMENTO</p>
          </motion.div>
          
          {/* Modern loading indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full mb-8"
          >
            {/* Progress bar */}
            <div className="relative w-full h-2 bg-gray-800/50 rounded-full overflow-hidden mb-6">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-purple-500 to-brand-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" />
            </div>
            
            {/* Progress info */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 font-mono">{progress.toFixed(0)}%</span>
              <span className="text-brand-purple-400 font-mono text-xs tracking-widest">LOADING...</span>
            </div>
          </motion.div>
          
          {/* Loading steps */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="h-6 flex items-center justify-center">
              <motion.span 
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-400 font-mono text-sm"
              >
                {loadingSteps[currentStep]}
              </motion.span>
            </div>
          </motion.div>
          
          {/* Technical info */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600 font-mono">
              <span>v2.4.1</span>
              <span>•</span>
              <span>BUILD 2024.12</span>
              <span>•</span>
              <span>REACT 18</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Regular spinner for non-fullscreen usage
  return (
    <div className="relative">
      <motion.div 
        className="border-4 border-t-brand-purple-500 border-r-brand-orange-500 border-b-brand-blue-500 border-l-transparent rounded-full w-10 h-10"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
