
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  if (fullScreen) {
    return (
      <div className="page-loader">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            {/* Logo T3RN simplificado */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-black border border-gray-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">T3</span>
            </div>
          </motion.div>
          <div className="loading-spinner"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-gray-400"
          >
            Carregando...
          </motion.p>
        </div>
      </div>
    );
  }

  return <div className="loading-spinner mx-auto"></div>;
};

export default LoadingSpinner;
