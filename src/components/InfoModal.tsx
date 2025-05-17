
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function InfoModal() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show modal after 15 seconds
    const timer = setTimeout(() => {
      // Check if user hasn't seen it before
      if (!localStorage.getItem('infoModalSeen')) {
        setIsVisible(true);
      }
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('infoModalSeen', 'true');
  };
  
  const handleAccept = () => {
    handleClose();
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            
            {/* Hero image */}
            <div className="h-40 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
              <img 
                src="/lovable-uploads/de223857-ae3e-4b16-9f67-7bfd65cd3173.png"
                alt="T3RN Desenvolvimento"
                className="h-16"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Orçamento Gratuito e Sem Compromisso
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Quer saber quanto custaria seu projeto digital? Solicite agora um orçamento detalhado, totalmente gratuito e sem compromisso.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  "Resposta em até 24 horas",
                  "Detalhamento completo de custos",
                  "Sugestões de otimização para seu orçamento",
                  "Consulta gratuita com nossos especialistas"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-gray-900 dark:text-white mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:shadow-lg transition-shadow"
                >
                  Solicitar orçamento
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 px-5 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Agora não
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
