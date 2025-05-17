
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle } from "lucide-react";

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
  equipe: "Nossa equipe é composta por desenvolvedores, designers e especialistas em UX/UI apaixonados por tecnologia e inovação."
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
      }
      
      const newAIMessage = { id: Date.now() + 1, text: response, isUser: false };
      setMessages((prev) => [...prev, newAIMessage]);
    }, 500);
    
    setMessage("");
  };

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-t3rn-blue text-black rounded-full p-4 shadow-lg z-50"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Modal do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-card border border-t3rn-blue/30 rounded-custom shadow-glow z-50 overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="bg-gradient-to-r from-secondary to-secondary/50 p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-t3rn-silver">
                <span className="text-t3rn-blue">T3RN</span> Assistant
              </h3>
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
                  <div
                    className={`inline-block max-w-[80%] px-4 py-2 rounded-2xl ${
                      msg.isUser
                        ? "bg-t3rn-blue/80 text-black"
                        : "bg-secondary text-t3rn-silver"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Entrada de mensagem */}
            <div className="p-3 border-t border-border bg-secondary">
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
                  className="flex-1 bg-input p-2 rounded-md text-t3rn-silver focus:outline-none focus:ring-1 focus:ring-t3rn-blue"
                />
                <button
                  type="submit"
                  className="bg-t3rn-blue p-2 rounded-md text-black hover:bg-t3rn-blue/80 transition-colors"
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
