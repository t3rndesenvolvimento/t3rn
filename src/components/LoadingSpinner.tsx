
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const loadingSteps = [
    "Inicializando sistema...",
    "Carregando módulos...",
    "Verificando conexões...",
    "Preparando interface...",
    "Finalizando..."
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
        {/* Technical grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        <div className="relative flex flex-col items-center max-w-md mx-auto px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="w-20 h-20 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-2xl"
                style={{ 
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
                }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 40px rgba(212, 175, 55, 0.6)",
                    "0 0 20px rgba(212, 175, 55, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-black font-bold text-3xl">T3</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Company name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">T3RN</h1>
            <p className="text-yellow-400 text-lg font-medium">DESENVOLVIMENTO</p>
          </motion.div>
          
          {/* Technical loading indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full mb-8"
          >
            {/* Progress bar */}
            <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
            </div>
            
            {/* Progress percentage */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400 font-mono">{progress.toFixed(0)}%</span>
              <span className="text-yellow-400 font-mono">LOADING...</span>
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
                className="text-gray-300 font-mono text-sm"
              >
                {loadingSteps[currentStep]}
              </motion.span>
            </div>
          </motion.div>
          
          {/* Technical details */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 font-mono">
              <span>v2.1.0</span>
              <span>•</span>
              <span>BUILD 2024.01</span>
              <span>•</span>
              <span>REACT 18</span>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle animated elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-32 right-24 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }} />
      </div>
    );
  }

  // Regular spinner for non-fullscreen usage
  return (
    <div className="relative">
      <motion.div 
        className="border-4 border-t-yellow-400 border-r-yellow-500 border-b-yellow-600 border-l-transparent rounded-full w-10 h-10"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
      <span className="sr-only">Carregando...</span>
    </div>
  );
};

export default LoadingSpinner;
