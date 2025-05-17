
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20 relative bg-t3rn-black bg-grid overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-t3rn-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-t3rn-blue/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center p-6 border-2 border-t3rn-blue/30 rounded-full bg-background shadow-[0_0_25px_rgba(0,191,255,0.15)] animate-pulse-glow shadow-t3rn-blue/30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-t3rn-blue">
              T3RN
            </h1>
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
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-t3rn-silver/80"
        >
          Transformamos ideias em soluções digitais inovadoras, focadas em performance, 
          design e experiência do usuário.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 bg-t3rn-blue text-black font-medium px-8 py-4 rounded-custom hover:bg-t3rn-blue/90 transition-all hover:gap-4"
          >
            <span>Ver nossos projetos</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
        
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
      </div>
    </section>
  );
}
