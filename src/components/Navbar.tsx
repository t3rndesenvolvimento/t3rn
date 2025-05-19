
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Menu navigation items
  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Questionário", href: "#questionnaire" },
    { name: "Contato", href: "#contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-10",
        scrolled 
          ? "bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800" 
          : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-cashDisplay text-xl text-white flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-gray-600 flex items-center justify-center mr-3">
              <span className="font-bold text-lg">T3</span>
            </div>
            <span className="font-bold mr-1">T3RN</span> <span className="text-gray-400 text-lg">Desenvolvimento</span>
          </motion.div>
        </a>
        
        {/* Contact Quick Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="tel:+551999042072" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">(19) 9904-2072</span>
          </a>
          <a href="mailto:contato@t3rn.com.br" className="flex items-center text-gray-300 hover:text-white transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm">contato@t3rn.com.br</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="bg-gray-900 border border-gray-800 rounded-full px-1 py-1 flex items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-2xl"
        >
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-3">
            {/* Mobile Contact Quick Links */}
            <div className="flex flex-col space-y-3 mb-3 border-b border-gray-800 pb-3">
              <a href="tel:+551999042072" className="flex items-center text-gray-300 hover:text-white transition-colors py-2">
                <Phone className="w-5 h-5 mr-3" />
                <span>(19) 9904-2072</span>
              </a>
              <a href="mailto:contato@t3rn.com.br" className="flex items-center text-gray-300 hover:text-white transition-colors py-2">
                <Mail className="w-5 h-5 mr-3" />
                <span>contato@t3rn.com.br</span>
              </a>
            </div>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
