
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { saveNewsletter } from '@/services/formService';
import LoadingSpinner from './LoadingSpinner';

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

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <span className="font-bold text-white">T3</span>
              </div>
              <span className="text-xl font-bold">T3RN</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos ideias em soluções digitais impactantes, com foco em alta performance e conversão.
            </p>
            <div className="flex space-x-3">
              {[
                "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
              ].map((path, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d={path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Coluna 2: Links úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Úteis</h3>
            <ul className="space-y-4">
              {[
                { name: "Sobre nós", href: "#about" },
                { name: "Serviços", href: "#services" },
                { name: "Projetos", href: "#projects" },
                { name: "Contato", href: "#contact" },
                { name: "Blog", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", 
                  text: "+55 (11) 99999-9999",
                  href: "https://api.whatsapp.com/send?phone=5511999999999"
                },
                { 
                  icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 L12,13 L2,6", 
                  text: "contato@t3rn.com.br", 
                  href: "mailto:contato@t3rn.com.br"
                },
                { 
                  icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12,7 a3,3 0 1,0 0,6 a3,3 0 1,0 0,-6", 
                  text: "São Paulo, SP - Brasil",
                  href: "#"
                },
              ].map((contact, index) => (
                <li key={index} className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-3 mt-1 shrink-0">
                    <path d={contact.icon}></path>
                  </svg>
                  <a href={contact.href} className="text-gray-400 hover:text-white transition-colors">
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coluna 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber as últimas novidades e ofertas especiais.
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
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} T3RN Desenvolvimento. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
