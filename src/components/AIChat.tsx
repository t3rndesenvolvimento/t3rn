
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Send, X } from 'lucide-react';

type Message = {
  id: number;
  isUser: boolean;
  text: string;
};

type ChatResponse = {
  [key: string]: string | string[];
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, isUser: false, text: 'Olá! Sou o assistente virtual da T3RN. Como posso ajudar você hoje?' },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chatResponses: ChatResponse = {
    "serviço": "Oferecemos desenvolvimento de sites, sistemas web, integrações com WhatsApp e soluções com IA. Nossos preços começam em R$ 3.800 para sites e R$ 8.900 para sistemas personalizados. Posso detalhar algum serviço específico?",
    "preço": "Nossos preços variam conforme a complexidade do projeto. Sites a partir de R$ 3.800, sistemas a partir de R$ 8.900, integrações com WhatsApp a partir de R$ 2.500. Para um orçamento personalizado, informe mais detalhes do seu projeto.",
    "orçamento": "Para solicitar um orçamento, você pode preencher o formulário na seção Contato do site, ou me contar mais sobre seu projeto agora mesmo para uma estimativa inicial. Qual tipo de solução você precisa?",
    "prazo": "Trabalhamos com prazos de 15 dias para sites, até 45 dias para sistemas médios e até 90 dias para projetos complexos. Sempre cumprimos os prazos estabelecidos e mantemos você informado durante todo o processo.",
    "pagamento": "Aceitamos pagamento via cartão de crédito (até 12x), PIX (10% de desconto), transferência bancária (8% de desconto) ou financiamento direto em até 24x. Qual forma seria melhor para você?",
    "contato": "Você pode entrar em contato conosco pelo telefone (19) 99042-0772, pelo e-mail contato@t3rn.dev ou preenchendo o formulário na seção de Contato. Prefere que entremos em contato com você? Basta deixar seu número ou e-mail.",
    "tecnologias": "Utilizamos tecnologias modernas como React, Node.js, TypeScript, MongoDB, Firebase, e outras conforme a necessidade de cada projeto. Para soluções com IA, trabalhamos com Python, TensorFlow e APIs OpenAI.",
    "portfolio": "Desenvolvemos diversos projetos como e-commerces, sistemas de gestão, aplicativos mobile e plataformas de conteúdo. Você pode conferir alguns casos de sucesso na seção Projetos do site. Algum tipo específico de projeto que gostaria de ver?",
    "equipe": "Nossa equipe é formada por desenvolvedores, designers e especialistas em UX/UI com mais de 5 anos de experiência. Trabalhamos de forma remota, o que nos permite atender clientes em todo o Brasil e exterior.",
    "diferencial": "Nosso diferencial é a combinação de código limpo, design atraente e estratégia de conversão. Entregamos 100% dos projetos no prazo, oferecemos 90 dias de garantia e priorizamos a comunicação constante com nossos clientes."
  };

  const answers = {
    default: "Não entendi completamente sua pergunta. Posso ajudar com informações sobre nossos serviços, preços, prazos de entrega, formas de pagamento ou processo de desenvolvimento. O que você gostaria de saber?",
    
    // Serviços
    "site": chatResponses["serviço"],
    "website": chatResponses["serviço"],
    "loja": chatResponses["serviço"],
    "serviço": chatResponses["serviço"],
    "serviços": chatResponses["serviço"],
    "fazem": chatResponses["serviço"],
    "oferecem": chatResponses["serviço"],
    "desenvolvimento": chatResponses["serviço"],
    
    // Preços
    "preço": chatResponses["preço"],
    "preços": chatResponses["preço"],
    "valor": chatResponses["preço"],
    "valores": chatResponses["preço"],
    "custo": chatResponses["preço"],
    "custos": chatResponses["preço"],
    "investimento": chatResponses["preço"],
    "quanto": chatResponses["preço"],
    "custa": chatResponses["preço"],
    
    // Orçamento
    "orçamento": chatResponses["orçamento"],
    "proposta": chatResponses["orçamento"],
    "contratar": chatResponses["orçamento"],
    "contrato": chatResponses["orçamento"],
    
    // Prazos
    "prazo": chatResponses["prazo"],
    "prazos": chatResponses["prazo"],
    "tempo": chatResponses["prazo"],
    "entrega": chatResponses["prazo"],
    "entregas": chatResponses["prazo"],
    "quando": chatResponses["prazo"],
    
    // Formas de Pagamento
    "pagamento": chatResponses["pagamento"],
    "pagar": chatResponses["pagamento"],
    "parcela": chatResponses["pagamento"],
    "parcelar": chatResponses["pagamento"],
    "desconto": chatResponses["pagamento"],
    "pix": chatResponses["pagamento"],
    "cartão": chatResponses["pagamento"],
    
    // Contato
    "contato": chatResponses["contato"],
    "telefone": chatResponses["contato"],
    "email": chatResponses["contato"],
    "whatsapp": chatResponses["contato"],
    "falar": chatResponses["contato"],
    "atendimento": chatResponses["contato"],
    
    // Tecnologias
    "tecnologia": chatResponses["tecnologias"],
    "tecnologias": chatResponses["tecnologias"],
    "stack": chatResponses["tecnologias"],
    "linguagem": chatResponses["tecnologias"],
    "react": chatResponses["tecnologias"],
    "node": chatResponses["tecnologias"],
    
    // Portfolio
    "portfolio": chatResponses["portfolio"],
    "portfólio": chatResponses["portfolio"],
    "projetos": chatResponses["portfolio"],
    "trabalhos": chatResponses["portfolio"],
    "cases": chatResponses["portfolio"],
    "case": chatResponses["portfolio"],
    "cliente": chatResponses["portfolio"],
    "clientes": chatResponses["portfolio"],
    
    // Equipe
    "equipe": chatResponses["equipe"],
    "time": chatResponses["equipe"],
    "desenvolvedores": chatResponses["equipe"],
    "funcionários": chatResponses["equipe"],
    "pessoas": chatResponses["equipe"],
    
    // Diferencial
    "diferencial": chatResponses["diferencial"],
    "diferenciais": chatResponses["diferencial"],
    "diferença": chatResponses["diferencial"],
    "melhor": chatResponses["diferencial"],
    "benefícios": chatResponses["diferencial"],
    "vantagem": chatResponses["diferencial"],
    "vantagens": chatResponses["diferencial"],
    "garantia": chatResponses["diferencial"]
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), isUser: true, text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage('');
    
    // Generate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(message);
      const botMessage = { id: Date.now(), isUser: false, text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 600);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Find a matching keyword in the answers object
    for (const [keyword, response] of Object.entries(answers)) {
      if (input.includes(keyword)) {
        return response as string;
      }
    }
    
    // Return default response if no match found
    return answers.default as string;
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>
      
      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-full max-w-sm z-40 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gray-900 dark:bg-gray-900 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="font-medium">T3</span>
                </div>
                <div>
                  <h3 className="font-medium">Assistente T3RN</h3>
                  <p className="text-xs text-gray-300">Resposta em tempo real</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl p-3 ${
                      msg.isUser
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua pergunta..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-none rounded-lg outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            
            {/* Footer */}
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-xs text-center text-gray-500 dark:text-gray-400">
              Assistente baseado em respostas pré-configuradas
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
