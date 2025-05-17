
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Code, Settings, Info, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  
  // Menu navigation items
  const navItems = [
    { name: "Início", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "Projetos", href: "#projects", icon: <Code className="w-5 h-5" /> },
    { name: "Serviços", href: "#services", icon: <Settings className="w-5 h-5" /> },
    { name: "Sobre", href: "#about", icon: <Info className="w-5 h-5" /> },
    { name: "Contato", href: "#contact", icon: <Mail className="w-5 h-5" /> },
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
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-12 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-bold text-xl text-t3rn-silver"
          >
            <span className="text-t3rn-blue">T3RN</span> Desenvolvimento
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 text-t3rn-silver hover:text-t3rn-blue transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <span>{item.name}</span>
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className="group p-2 text-t3rn-silver hover:text-t3rn-blue transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 justify-center items-end w-7">
              <motion.div 
                className="h-0.5 bg-current"
                animate={{
                  width: activeMobileMenu ? "24px" : "24px",
                  rotate: activeMobileMenu ? 45 : 0,
                  translateY: activeMobileMenu ? 8 : 0
                }}
              />
              <motion.div 
                className="h-0.5 bg-current" 
                animate={{
                  width: activeMobileMenu ? "24px" : "16px",
                  opacity: activeMobileMenu ? 0 : 1
                }}
              />
              <motion.div 
                className="h-0.5 bg-current"
                animate={{
                  width: activeMobileMenu ? "24px" : "20px",
                  rotate: activeMobileMenu ? -45 : 0,
                  translateY: activeMobileMenu ? -8 : 0
                }}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={{ height: activeMobileMenu ? "auto" : 0, opacity: activeMobileMenu ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="py-4 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-2 px-4 text-t3rn-silver hover:text-t3rn-blue transition-colors"
              onClick={() => setActiveMobileMenu(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
