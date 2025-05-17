
import { motion } from "framer-motion";
import { MessageSquare, Code, Zap, CheckCircle } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Descoberta",
      description: "Entendemos suas necessidades através de um briefing detalhado e análise do seu negócio."
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desenvolvimento",
      description: "Criamos soluções personalizadas usando as tecnologias mais modernas e eficientes."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Implementação",
      description: "Testamos e implementamos sua solução com foco em performance e experiência do usuário."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Entrega e Suporte",
      description: "Entregamos seu projeto e oferecemos suporte contínuo para garantir o sucesso."
    }
  ];

  return (
    <section className="py-20 bg-t3rn-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            Como <span className="text-t3rn-blue">trabalhamos</span>
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            Nossa metodologia foi desenvolvida para garantir eficiência e qualidade em cada etapa do projeto
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-secondary p-8 rounded-custom border border-border hover:border-t3rn-blue/50 transition-all h-full flex flex-col items-center text-center">
                {/* Número do passo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-t3rn-blue text-black flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                
                {/* Ícone */}
                <div className="mb-6 text-t3rn-blue">
                  {step.icon}
                </div>
                
                {/* Título e descrição */}
                <h3 className="text-xl font-semibold mb-4 text-t3rn-silver">{step.title}</h3>
                <p className="text-t3rn-silver/70">{step.description}</p>
              </div>
              
              {/* Conectores entre os passos (exceto para o último) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-t3rn-blue/50"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
