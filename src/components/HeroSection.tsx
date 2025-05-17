
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 relative bg-t3rn-black bg-grid overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-t3rn-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-t3rn-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center p-5 border-2 border-t3rn-blue/30 rounded-full bg-background shadow-[0_0_25px_rgba(0,191,255,0.15)] animate-pulse-glow shadow-t3rn-blue/30">
                <img 
                  src="/lovable-uploads/de223857-ae3e-4b16-9f67-7bfd65cd3173.png" 
                  alt="T3RN Desenvolvimento" 
                  className="h-16 w-auto"
                />
              </div>
            </motion.div>
            
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-t3rn-silver"
            >
              Soluções inteligentes para um <span className="text-gradient-blue">mundo digital</span>.
            </motion.h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg md:text-xl mb-12 text-t3rn-silver/80"
            >
              Transformamos ideias em soluções digitais inovadoras, focadas em performance, 
              design e experiência do usuário.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-t3rn-blue text-black font-medium px-8 py-4 rounded-custom hover:bg-t3rn-blue/90 transition-all hover:gap-4"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-transparent border border-t3rn-blue/50 text-t3rn-silver font-medium px-8 py-4 rounded-custom hover:bg-t3rn-blue/10 transition-all"
              >
                <span>Nossos Projetos</span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Mockup de Celular */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Frame do celular */}
              <div className="w-[280px] h-[570px] bg-gray-900 rounded-[36px] border-4 border-gray-800 shadow-xl relative overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-gray-950 rounded-b-xl z-10"></div>
                
                {/* Tela do celular */}
                <div className="w-full h-full overflow-hidden rounded-[32px] bg-gradient-to-br from-t3rn-blue/20 to-purple-900/30">
                  {/* Conteúdo da tela */}
                  <div className="p-6 pt-10">
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-t3rn-blue/80 flex items-center justify-center">
                        <img 
                          src="/lovable-uploads/de223857-ae3e-4b16-9f67-7bfd65cd3173.png" 
                          alt="T3RN logo" 
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-t3rn-blue/80"></div>
                        <div className="w-2 h-2 rounded-full bg-t3rn-blue/80"></div>
                        <div className="w-2 h-2 rounded-full bg-t3rn-blue/80"></div>
                      </div>
                    </div>
                    
                    {/* Mini dashboard */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <h4 className="text-white text-sm font-medium mb-2">Dashboard</h4>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-gray-300">Projetos</span>
                        <span className="text-xs text-t3rn-blue">48</span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-t3rn-blue"></div>
                      </div>
                    </div>
                    
                    {/* Lista de itens */}
                    {[1, 2, 3, 4].map((item) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + item * 0.1 }}
                        className="bg-white/5 rounded-lg p-3 mb-3 flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-t3rn-blue/20 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-sm bg-t3rn-blue"></div>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                          <div className="h-2 w-16 bg-white/10 rounded"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Reflexo/Brilho */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[32px]"></div>
              
              {/* Botão home */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>
              
              {/* Círculos de Destaque */}
              <div className="absolute -z-10 top-1/4 -right-16 w-32 h-32 bg-t3rn-blue/20 rounded-full filter blur-xl"></div>
              <div className="absolute -z-10 bottom-1/4 -left-16 w-32 h-32 bg-t3rn-blue/20 rounded-full filter blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-t3rn-silver/50 text-sm">Scroll para descobrir</p>
          <div className="w-0.5 h-16 bg-gradient-to-b from-t3rn-blue to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
