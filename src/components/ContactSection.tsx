
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        description: "Entraremos em contato em até 4 horas úteis."
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm mb-4">
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Pronto para <span className="text-gradient-gray">transformar</span> seu negócio?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário abaixo e receba uma consulta gratuita com nossos especialistas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Entre em contato</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 outline-none rounded-lg transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 outline-none rounded-lg transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 outline-none rounded-lg transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Serviço de interesse</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 outline-none rounded-lg transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="website">Site Profissional</option>
                      <option value="system">Sistema Web</option>
                      <option value="whatsapp">Automação WhatsApp</option>
                      <option value="ai">Solução com IA</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sua mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-gray-300 focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300 outline-none rounded-lg transition-colors min-h-[120px]"
                    placeholder="Descreva seu projeto ou necessidade"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="mr-2" required />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    Concordo com a <a href="#" className="text-gray-900 dark:text-white underline">Política de Privacidade</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-transparent border-white dark:border-gray-900"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Solicitar orçamento gratuito</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-elegant p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Informações de contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Telefone</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Atendimento em horário comercial</p>
                    <a href="tel:+5519990420772" className="text-gray-900 dark:text-white font-medium hover:underline">(19) 99042-0772</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">WhatsApp</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Resposta em até 2 horas</p>
                    <a href="https://wa.me/5519990420772" className="text-gray-900 dark:text-white font-medium hover:underline">Iniciar conversa</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">E-mail</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Resposta em até 24 horas</p>
                    <a href="mailto:contato@t3rn.dev" className="text-gray-900 dark:text-white font-medium hover:underline">contato@t3rn.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Acompanhe nossas novidades</p>
                    <a href="#" className="text-gray-900 dark:text-white font-medium hover:underline">linkedin.com/company/t3rn</a>
                  </div>
                </div>
              </div>
              
              {/* Testimonial quote */}
              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "A equipe da T3RN superou todas as expectativas. Nosso e-commerce não apenas ficou lindo, como também aumentou nossas vendas em 180% no primeiro mês."
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Cliente Satisfeito" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Renata Silva</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Moda Express</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* FAQ section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Perguntas Frequentes
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Quanto custa um site ou sistema personalizado?",
                answer: "O investimento varia conforme a complexidade e o escopo do projeto. Sites institucionais começam em R$ 3.800, enquanto sistemas personalizados partem de R$ 8.900. Cada projeto recebe um orçamento detalhado e transparente."
              },
              {
                question: "Qual é o prazo de entrega dos projetos?",
                answer: "Nossos prazos variam conforme a complexidade: sites em até 15 dias, sistemas em 45 dias e projetos mais complexos em até 90 dias. Sempre estabelecemos um cronograma detalhado no início do projeto."
              },
              {
                question: "Como funciona o suporte após a conclusão do projeto?",
                answer: "Todos os projetos incluem 90 dias de garantia e suporte gratuito. Após esse período, oferecemos planos de manutenção mensais com diferentes níveis de suporte, conforme a necessidade do cliente."
              },
              {
                question: "Vocês trabalham com projetos de outros estados?",
                answer: "Sim! Atendemos clientes de todo o Brasil e exterior. Todo o processo pode ser conduzido remotamente, com reuniões online e acompanhamento constante através dos nossos canais de comunicação."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-elegant"
              >
                <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
