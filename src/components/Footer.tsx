
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-t3rn-black border-t border-border">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="font-bold text-xl text-t3rn-silver mb-2">
              <span className="text-t3rn-blue">T3RN</span> Desenvolvimento
            </div>
            <p className="text-t3rn-silver/60 text-sm">
              &copy; {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <a href="#home" className="text-t3rn-silver/70 hover:text-t3rn-blue transition-colors">Início</a>
              <a href="#projects" className="text-t3rn-silver/70 hover:text-t3rn-blue transition-colors">Projetos</a>
              <a href="#services" className="text-t3rn-silver/70 hover:text-t3rn-blue transition-colors">Serviços</a>
              <a href="#about" className="text-t3rn-silver/70 hover:text-t3rn-blue transition-colors">Sobre</a>
              <a href="#contact" className="text-t3rn-silver/70 hover:text-t3rn-blue transition-colors">Contato</a>
              
              <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="p-3 bg-muted rounded-full text-t3rn-silver/70 hover:text-t3rn-blue hover:bg-secondary transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
