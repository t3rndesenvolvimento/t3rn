
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551999042072", "_blank");
  };

  return (
    <footer className="bg-gray-100 dark:bg-t3rn-black border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        {/* Newsletter / CTA Section */}
        <div className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-cashDisplay font-bold text-gray-900 dark:text-gray-100 mb-3">
                Vamos criar algo incrível juntos
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg">
                Transforme sua visão em realidade com nosso expertise em desenvolvimento digital
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <span>Iniciar projeto</span>
                <ArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex flex-col items-center text-center"
              >
                <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-3" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Ligue para nós</h4>
                <button
                  onClick={handleWhatsAppClick} 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  +55 19 9904-2072
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex flex-col items-center text-center"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-3" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Email</h4>
                <a href="mailto:contato@t3rn.com.br" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                  contato@t3rn.com.br
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex flex-col items-center text-center"
              >
                <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-3" />
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">Localização</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Campinas, SP
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="font-cashDisplay text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                T3RN
                <span className="text-gray-500">Dev</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Transformando ideias em soluções digitais impactantes desde 2018.
              </p>
              
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social}.com`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Serviços</h4>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento Web",
                  "Aplicativos Móveis",
                  "Consultoria UX/UI",
                  "E-commerce",
                  "Sistemas Personalizados"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#services" 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Empresa</h4>
              <ul className="space-y-3">
                {[
                  { text: "Sobre nós", href: "#about" },
                  { text: "Como trabalhamos", href: "#process" },
                  { text: "Portfólio", href: "#projects" },
                  { text: "Depoimentos", href: "#testimonials" },
                  { text: "Contato", href: "#contact" }
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.href} 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Legal</h4>
              <ul className="space-y-3">
                {[
                  "Termos de Serviço",
                  "Política de Privacidade",
                  "Cookies",
                  "FAQ",
                  "Suporte"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
