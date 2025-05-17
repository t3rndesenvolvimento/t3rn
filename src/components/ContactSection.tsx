
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve."
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-t3rn-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            <span className="text-t3rn-blue">Entre em</span> Contato
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade. Entre em contato 
            para conversarmos sobre o seu projeto.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-t3rn-silver/80 mb-2">Seu nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary text-t3rn-silver border border-border focus:border-t3rn-blue focus:ring-1 focus:ring-t3rn-blue/50 outline-none rounded-custom transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-t3rn-silver/80 mb-2">Seu e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary text-t3rn-silver border border-border focus:border-t3rn-blue focus:ring-1 focus:ring-t3rn-blue/50 outline-none rounded-custom transition-colors"
                  placeholder="Digite seu e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-t3rn-silver/80 mb-2">Sua mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary text-t3rn-silver border border-border focus:border-t3rn-blue focus:ring-1 focus:ring-t3rn-blue/50 outline-none rounded-custom transition-colors min-h-[150px]"
                  placeholder="Descreva seu projeto ou dúvida"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-t3rn-blue text-black font-medium px-6 py-3 rounded-custom hover:bg-t3rn-blue/90 transition-colors disabled:bg-t3rn-blue/70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-b-transparent border-black"></span>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensagem</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="bg-secondary p-8 rounded-custom border border-border h-full">
              <h3 className="text-2xl font-semibold mb-6 text-t3rn-silver">
                Outras formas de contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-full text-t3rn-blue">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-t3rn-silver mb-1">WhatsApp</h4>
                    <p className="text-t3rn-silver/70 mb-2">Atendimento rápido via Zapson</p>
                    <a href="#" className="text-t3rn-blue hover:underline">Iniciar conversa</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-full text-t3rn-blue">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-t3rn-silver mb-1">E-mail</h4>
                    <p className="text-t3rn-silver/70 mb-2">Entre em contato por e-mail</p>
                    <a href="mailto:contato@t3rn.dev" className="text-t3rn-blue hover:underline">contato@t3rn.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-full text-t3rn-blue">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-t3rn-silver mb-1">LinkedIn</h4>
                    <p className="text-t3rn-silver/70 mb-2">Acompanhe nossas atualizações</p>
                    <a href="#" className="text-t3rn-blue hover:underline">linkedin.com/company/t3rn</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-muted rounded-custom">
                <p className="text-t3rn-silver/80 italic">
                  "Transformamos ideias complexas em soluções simples, elegantes e funcionais."
                </p>
                <div className="mt-4 text-t3rn-silver/60 text-sm">
                  - Equipe T3RN
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
