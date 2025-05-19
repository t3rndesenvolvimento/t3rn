
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { saveNewsletter } from '@/services/formService';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Github, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await saveNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Inscrição confirmada!",
          description: result.message,
        });
        setEmail('');
      } else {
        toast({
          variant: "destructive",
          title: "Erro na inscrição",
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível processar sua inscrição. Tente novamente mais tarde.",
      });
      console.error("Erro na newsletter:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Serviços", href: "#services" },
        { name: "Carreira", href: "#" },
        { name: "Blog", href: "#" },
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Documentação", href: "#" },
        { name: "Tutoriais", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Suporte", href: "#" },
        { name: "Política de Privacidade", href: "#" },
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Desenvolvimento Web", href: "#services" },
        { name: "Aplicativos Móveis", href: "#services" },
        { name: "E-commerce", href: "#services" },
        { name: "Design UX/UI", href: "#services" },
        { name: "Consultoria", href: "#services" },
      ]
    }
  ];

  return (
    <footer className="relative bg-black text-white pb-8 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      {/* Footer content */}
      <div className="relative z-10">
        {/* Top curved shape */}
        <div className="w-full overflow-hidden h-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute -top-19 left-0 w-full h-20 text-gray-900"
            fill="currentColor"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
        
        {/* Main footer content */}
        <div className="container mx-auto max-w-7xl pt-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo and company description */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-black border border-gray-600 flex items-center justify-center mr-3">
                  <span className="font-bold text-xl text-white">T3</span>
                </div>
                <div>
                  <span className="text-2xl font-bold block">T3RN</span>
                  <span className="text-gray-400 text-sm">Desenvolvimento Digital</span>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 mb-6"
              >
                Transformamos ideias em soluções digitais impactantes, com foco em alta performance, design inovador e experiências que convertem.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-3"
              >
                {[
                  { icon: Github, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.icon.name} link`}
                  >
                    <social.icon size={20} className="text-gray-300" />
                  </a>
                ))}
              </motion.div>
            </div>
            
            {/* Quick links */}
            {footerLinks.map((group, groupIndex) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (groupIndex + 1) }}
              >
                <h3 className="text-lg font-semibold mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                        {link.name}
                        {link.href.startsWith("http") && (
                          <ExternalLink className="ml-1" size={14} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            
            {/* Newsletter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-semibold mb-6">Receba nossas novidades</h3>
              <p className="text-gray-400 mb-4">
                Inscreva-se para receber atualizações sobre novas tecnologias e ofertas especiais.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-gray-600 rounded-r-none"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gray-100 hover:bg-white text-gray-900 px-4 py-2 font-medium rounded-r-md border border-gray-100 hover:border-white flex items-center justify-center min-w-[100px]"
                  >
                    {isSubmitting ? <LoadingSpinner /> : 'Inscrever'}
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Nunca compartilhamos seus dados. Leia nossa{' '}
                  <a href="#" className="text-gray-400 hover:text-white underline">
                    política de privacidade
                  </a>
                  .
                </p>
              </form>
              
              {/* Contact info */}
              <div className="mt-8 space-y-3">
                {[
                  { 
                    icon: Phone, 
                    text: "(19) 9904-2072",
                    href: "tel:+551999042072"
                  },
                  { 
                    icon: Mail, 
                    text: "contato@t3rn.com.br", 
                    href: "mailto:contato@t3rn.com.br"
                  },
                  { 
                    icon: MapPin, 
                    text: "São Paulo, SP - Brasil",
                    href: "https://maps.google.com/?q=São+Paulo+Brasil"
                  },
                ].map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-5 h-5 mr-3 text-gray-500" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Copyright and legal links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">LGPD</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
