
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bell, X } from 'lucide-react';

interface NotificationProps {
  delay?: number;
}

export default function Notification({ delay = 3000 }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Exibe a notificação após o delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Esconde após 8 segundos
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
          className="fixed top-24 right-4 z-40 max-w-sm w-full bg-card border border-t3rn-gray-700/30 rounded-xl shadow-glow overflow-hidden"
        >
          {/* Barra de Progresso */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 8, ease: "linear" }}
            className="h-1 bg-t3rn-gray-500"
          />
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-t3rn-gray-800 rounded-full">
                  <Bell className="w-4 h-4 text-t3rn-gray-400" />
                </div>
                <h4 className="font-cashDisplay text-t3rn-silver">Novidade</h4>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-t3rn-silver/60 hover:text-t3rn-silver"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-t3rn-silver/80 mb-3">
              Agora você pode conversar diretamente com nosso assistente virtual.
              Experimente perguntar sobre nossos serviços e prazos de entrega!
            </p>
            <div className="flex justify-end">
              <button 
                onClick={() => setIsVisible(false)}
                className="text-sm text-t3rn-gray-400 hover:underline"
              >
                Entendido
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
