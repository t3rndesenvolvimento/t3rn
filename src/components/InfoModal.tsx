
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Info } from 'lucide-react';

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Exibe o modal após 5 segundos na página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Fecha o modal e salva no localStorage para não exibir novamente na sessão
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('infoModalShown', 'true');
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card border border-t3rn-blue/30 rounded-custom p-6 max-w-md w-full shadow-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-t3rn-blue">
                <Info className="w-5 h-5" />
                <h3 className="text-xl font-semibold text-t3rn-silver">Bem-vindo à T3RN</h3>
              </div>
              <button 
                onClick={handleClose}
                className="text-t3rn-silver/60 hover:text-t3rn-silver transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-6 text-t3rn-silver/80">
              <p className="mb-4">
                Somos especializados em transformar ideias em soluções digitais inovadoras.
                Desde sites modernos até sistemas complexos com IA.
              </p>
              <p>
                Entre em contato pelo telefone <span className="text-t3rn-blue">(19) 99042072</span> e 
                descubra como podemos ajudar seu negócio a crescer no mundo digital.
              </p>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={() => {
                  handleClose();
                  // Scroll para a seção de contato
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-t3rn-blue text-black font-medium px-6 py-2 rounded-custom hover:bg-t3rn-blue/90 transition-colors"
              >
                Fale Conosco
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
