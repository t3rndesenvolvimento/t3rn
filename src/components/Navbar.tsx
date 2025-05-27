
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Menu navigation items
  const navItems = [
    { name: "Início", href: "/" },
    { name: "Projetos", href: "/#projects" },
    { name: "Serviços", href: "/#services" },
    { name: "Depoimentos", href: "/#testimonials" },
    { name: "Diferenciais", href: "/diferenciais" },
    { name: "Orçamento", href: "/orcamento" },
    { name: "Suporte", href: "/suporte" },
    { name: "Contato", href: "/#contact" },
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
        "fixed top-0 w-full z-50 transition-all duration-300 py-3 px-4 lg:px-6 xl:px-10",
        scrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-t3rn-red-500/20 shadow-lg" 
          : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="z-50 flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-cashDisplay text-xl text-white flex items-center"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center mr-2 lg:mr-3 shadow-lg neon-glow border border-t3rn-silver-400/30 p-1.5">
              <img 
                src="/lovable-uploads/aa2e98e2-f912-4daf-a318-60054bede48b.png" 
                alt="T3RN Logo" 
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold mr-1">T3RN</span> 
              <span className="text-t3rn-silver-400 text-base lg:text-lg">Desenvolvimento</span>
            </div>
            <div className="block sm:hidden">
              <span className="font-bold text-lg">T3RN</span>
            </div>
          </motion.div>
        </Link>
        
        {/* Contact Quick Links - Desktop Only */}
        <div className="hidden xl:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="tel:+551999042072" className="flex items-center text-gray-300 hover:text-t3rn-red-400 transition-colors group">
            <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            <span className="text-sm">(19) 9904-2072</span>
          </a>
          <a href="mailto:contato@t3rn.com.br" className="flex items-center text-gray-300 hover:text-t3rn-red-400 transition-colors group">
            <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
            <span className="text-sm">contato@t3rn.com.br</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <div className="glass-effect border border-t3rn-red-500/30 rounded-full px-1 py-1 flex items-center backdrop-blur-sm">
            {navItems.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link 
                    to={item.href} 
                    className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-300 hover:text-t3rn-red-400 transition-colors rounded-full hover:bg-t3rn-red-500/10 hover:shadow-glow"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-gray-300 hover:text-t3rn-red-400 transition-colors rounded-full hover:bg-t3rn-red-500/10 hover:shadow-glow"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none hover:bg-t3rn-red-500/10 rounded-lg transition-colors"
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
          className="lg:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-t3rn-red-500/30 shadow-2xl backdrop-blur-md"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-1 max-w-7xl">
            {/* Mobile Contact Quick Links */}
            <div className="flex flex-col space-y-2 mb-4 border-b border-t3rn-red-500/20 pb-4">
              <a href="tel:+551999042072" className="flex items-center text-gray-300 hover:text-t3rn-red-400 transition-colors py-2 px-3 rounded-lg hover:bg-t3rn-red-500/10">
                <Phone className="w-5 h-5 mr-3" />
                <span>(19) 9904-2072</span>
              </a>
              <a href="mailto:contato@t3rn.com.br" className="flex items-center text-gray-300 hover:text-t3rn-red-400 transition-colors py-2 px-3 rounded-lg hover:bg-t3rn-red-500/10">
                <Mail className="w-5 h-5 mr-3" />
                <span>contato@t3rn.com.br</span>
              </a>
            </div>
            
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    to={item.href}
                    className="py-3 px-3 text-gray-300 hover:text-t3rn-red-400 hover:bg-t3rn-red-500/10 rounded-lg transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="py-3 px-3 text-gray-300 hover:text-t3rn-red-400 hover:bg-t3rn-red-500/10 rounded-lg transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
