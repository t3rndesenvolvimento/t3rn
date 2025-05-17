
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, X, ArrowRight, Clock } from 'lucide-react';

interface NotificationProps {
  delay?: number;
}

export default function Notification({ delay = 3000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Display notification after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Hide after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-24 right-4 z-40 max-w-sm w-full bg-white dark:bg-gray-800 rounded-xl shadow-elegant overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          {/* Progress bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-1 bg-gray-900 dark:bg-gray-200"
          />
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Bell className="w-4 h-4 text-gray-900 dark:text-gray-200" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">Oferta Especial</h4>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              10% de desconto em qualquer serviço contratado até o fim do mês. 
              Solicite um orçamento agora!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                <span>Oferta válida por tempo limitado</span>
              </div>
              <button 
                onClick={() => {
                  setIsVisible(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-sm text-gray-900 dark:text-white font-medium hover:underline"
              >
                <span>Aproveitar</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
