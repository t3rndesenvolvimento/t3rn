
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  
  // Menu navigation items
  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
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
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-12 py-3",
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
            className="font-cashDisplay text-xl text-t3rn-silver"
          >
            <span className="text-t3rn-gray-400">T3RN</span> Desenvolvimento
          </motion.div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <div className="bg-t3rn-gray-800/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-t3rn-silver hover:text-white transition-colors rounded-full hover:bg-t3rn-gray-700/50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            className="group p-2 text-t3rn-silver hover:text-white transition-colors"
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
        <div className="py-4 mt-2 space-y-1 flex flex-col bg-t3rn-gray-800/80 backdrop-blur-md rounded-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-3 px-6 text-t3rn-silver hover:text-white hover:bg-t3rn-gray-700/50 transition-colors"
              onClick={() => setActiveMobileMenu(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
