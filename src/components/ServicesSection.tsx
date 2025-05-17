
import { motion } from "framer-motion";
import { Globe, Code, MessageSquare, Brain, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Criação de Sites",
      description: "Desenvolvemos sites modernos, responsivos e otimizados para buscadores, com foco em conversão.",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Desenvolvimento de Sistemas",
      description: "Criamos sistemas web personalizados para automatizar e melhorar processos do seu negócio.",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Integrações com WhatsApp",
      description: "Soluções completas de automação e atendimento via WhatsApp, conectadas aos seus sistemas.",
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "IA Personalizada",
      description: "Desenvolvemos soluções com inteligência artificial para otimizar processos e atendimento.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-t3rn-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            <span className="text-t3rn-blue">Nossos</span> Serviços
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            Oferecemos soluções completas em desenvolvimento digital, desde a criação
            de sites até sistemas complexos com inteligência artificial.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-custom border border-border hover:border-t3rn-blue/50 transition-all group"
            >
              <div className="mb-6 text-t3rn-blue group-hover:animate-float">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-t3rn-silver">{service.title}</h3>
              <p className="text-t3rn-silver/70">{service.description}</p>
              
              <div className="mt-6">
                <a
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-t3rn-blue hover:gap-3 transition-all group-hover:underline"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Technology Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary to-secondary/50 p-8 md:p-12 rounded-custom"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-t3rn-silver">
                Tecnologias de <span className="text-t3rn-blue">ponta</span>
              </h3>
              <p className="text-t3rn-silver/70 max-w-lg">
                Trabalhamos com as tecnologias mais modernas do mercado para entregar
                soluções robustas, escaláveis e de alta performance.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'Node.js', 'TypeScript', 'AI', 'MongoDB'].map((tech, index) => (
                <div key={tech} className="px-4 py-2 bg-muted rounded-full text-t3rn-silver/70 text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
