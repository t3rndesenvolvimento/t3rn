
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, Bot, User } from "lucide-react";

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

// Respostas pré-definidas da IA para perguntas comuns sobre a empresa
const aiResponses: Record<string, string> = {
  default: "Olá! Sou o assistente virtual da T3RN Desenvolvimento. Como posso ajudar você hoje?",
  sobre: "A T3RN Desenvolvimento é uma empresa especializada em soluções digitais inovadoras, focadas em performance, design e experiência do usuário. Transformamos ideias em realidade digital!",
  servicos: "Oferecemos criação de sites, desenvolvimento de sistemas, integrações com WhatsApp e soluções com IA personalizada.",
  contato: "Você pode entrar em contato conosco pelo telefone (19) 99042072 ou através do formulário em nosso site.",
  projetos: "Trabalhamos com diversos projetos, desde e-commerce até sistemas complexos. Cada projeto é personalizado de acordo com as necessidades do cliente.",
  pagamento: "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, boleto bancário, PIX e transferência bancária.",
  equipe: "Nossa equipe é composta por desenvolvedores, designers e especialistas em UX/UI apaixonados por tecnologia e inovação.",
  prazos: "Nossos prazos de entrega variam de acordo com a complexidade do projeto. Geralmente, um site institucional leva de 15 a 30 dias, enquanto sistemas mais complexos podem levar de 30 a 90 dias.",
  metodologia: "Trabalhamos com metodologias ágeis como Scrum, com entregas parciais para que o cliente possa acompanhar o desenvolvimento e sugerir ajustes durante o processo.",
  tecnologias: "Utilizamos as tecnologias mais modernas do mercado, como React, Node.js, Next.js, TypeScript, Tailwind CSS e integrações com diversas APIs.",
  beneficios: "Ao contratar nossos serviços, você terá um produto digital de alta qualidade, otimizado para SEO, responsivo, com excelente performance e totalmente personalizado para sua marca.",
  suporte: "Oferecemos suporte técnico por 3 meses após a entrega do projeto, garantindo que tudo funcione perfeitamente. Após esse período, temos planos de manutenção mensal.",
  garantia: "Todos os nossos projetos têm garantia de 90 dias para correção de bugs e problemas técnicos que possam surgir após a entrega.",
  hospedagem: "Oferecemos serviços de hospedagem com alta performance e disponibilidade, além de configuração de domínios e e-mails profissionais.",
  processo: "Nosso processo de trabalho envolve: 1) Briefing e levantamento de requisitos, 2) Planejamento e prototipação, 3) Desenvolvimento, 4) Testes e ajustes, 5) Lançamento e treinamento."
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: aiResponses.default, isUser: false }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    
    // Adiciona a mensagem do usuário
    const newUserMessage = { id: Date.now(), text: message, isUser: true };
    setMessages((prev) => [...prev, newUserMessage]);
    
    // Processa a resposta da IA
    setTimeout(() => {
      let response = aiResponses.default;
      
      const lowerMsg = message.toLowerCase();
      
      if (lowerMsg.includes("sobre") || lowerMsg.includes("empresa") || lowerMsg.includes("t3rn")) {
        response = aiResponses.sobre;
      } else if (lowerMsg.includes("serviço") || lowerMsg.includes("oferecem")) {
        response = aiResponses.servicos;
      } else if (lowerMsg.includes("contato") || lowerMsg.includes("falar") || lowerMsg.includes("telefone")) {
        response = aiResponses.contato;
      } else if (lowerMsg.includes("projeto") || lowerMsg.includes("trabalho")) {
        response = aiResponses.projetos;
      } else if (lowerMsg.includes("pagamento") || lowerMsg.includes("pagar")) {
        response = aiResponses.pagamento;
      } else if (lowerMsg.includes("equipe") || lowerMsg.includes("time") || lowerMsg.includes("quem")) {
        response = aiResponses.equipe;
      } else if (lowerMsg.includes("prazo") || lowerMsg.includes("entrega") || lowerMsg.includes("tempo")) {
        response = aiResponses.prazos;
      } else if (lowerMsg.includes("metodologia") || lowerMsg.includes("trabalham") || lowerMsg.includes("método")) {
        response = aiResponses.metodologia;
      } else if (lowerMsg.includes("tecnologia") || lowerMsg.includes("tech") || lowerMsg.includes("ferramenta")) {
        response = aiResponses.tecnologias;
      } else if (lowerMsg.includes("benefício") || lowerMsg.includes("vantagem")) {
        response = aiResponses.beneficios;
      } else if (lowerMsg.includes("suporte") || lowerMsg.includes("ajuda") || lowerMsg.includes("assistência")) {
        response = aiResponses.suporte;
      } else if (lowerMsg.includes("garantia") || lowerMsg.includes("segurança")) {
        response = aiResponses.garantia;
      } else if (lowerMsg.includes("hospeda") || lowerMsg.includes("servidor") || lowerMsg.includes("domínio")) {
        response = aiResponses.hospedagem;
      } else if (lowerMsg.includes("processo") || lowerMsg.includes("etapa") || lowerMsg.includes("como funciona")) {
        response = aiResponses.processo;
      }
      
      const newAIMessage = { id: Date.now() + 1, text: response, isUser: false };
      setMessages((prev) => [...prev, newAIMessage]);
    }, 500);
    
    setMessage("");
  };

  const suggestedQuestions = [
    "Como funciona o processo de desenvolvimento?",
    "Quais são os prazos de entrega?",
    "Que tecnologias vocês utilizam?",
    "Como funciona o pagamento?"
  ];

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-t3rn-gray-600 text-black rounded-full p-4 shadow-lg z-50 group"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-t3rn-gray-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-t3rn-gray-400"></span>
        </div>
        <MessageCircle className="w-6 h-6 text-black group-hover:text-t3rn-gray-900 transition-colors" />
      </motion.button>

      {/* Modal do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-card border border-t3rn-gray-700/30 rounded-xl shadow-glow z-50 overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="bg-gradient-to-r from-t3rn-gray-800 to-t3rn-gray-900 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-t3rn-gray-400" />
                <h3 className="text-lg font-cashDisplay text-t3rn-silver">
                  <span className="text-t3rn-gray-400">T3RN</span> Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-t3rn-silver/60 hover:text-t3rn-silver"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Área de mensagens */}
            <div className="h-80 overflow-y-auto p-4 bg-t3rn-black">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${msg.isUser ? "text-right" : ""}`}
                >
                  <div className={`flex items-center gap-2 ${msg.isUser ? "flex-row-reverse" : ""}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${msg.isUser ? "bg-t3rn-gray-600" : "bg-t3rn-gray-800"}`}>
                      {msg.isUser ? (
                        <User className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Bot className="w-3.5 h-3.5 text-t3rn-gray-400" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                        msg.isUser
                          ? "bg-t3rn-gray-600 text-white"
                          : "bg-t3rn-gray-800 text-t3rn-silver"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Sugestões */}
            {messages.length < 3 && (
              <div className="p-2 bg-t3rn-gray-900 border-t border-t3rn-gray-800">
                <p className="text-xs text-t3rn-gray-500 mb-2 pl-2">Perguntas sugeridas:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setMessage(question);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-xs bg-t3rn-gray-800 text-t3rn-gray-400 px-3 py-1.5 rounded-full hover:bg-t3rn-gray-700 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Entrada de mensagem */}
            <div className="p-3 border-t border-border bg-t3rn-gray-900">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Pergunte sobre a T3RN..."
                  className="flex-1 bg-t3rn-gray-800 p-2 rounded-md text-t3rn-silver focus:outline-none focus:ring-1 focus:ring-t3rn-gray-600"
                />
                <button
                  type="submit"
                  className="bg-t3rn-gray-600 p-2 rounded-md text-white hover:bg-t3rn-gray-500 transition-colors"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
