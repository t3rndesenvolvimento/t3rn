
import { motion } from "framer-motion";
import { Globe, Code, MessageSquare, Brain, ArrowRight, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Sites Profissionais",
      description: "Sites responsivos e otimizados para buscadores, com design moderno e foco em conversão.",
      features: [
        "Design personalizado e exclusivo",
        "Responsivo para todos os dispositivos",
        "Otimização para mecanismos de busca (SEO)",
        "Integração com Google Analytics",
        "Painel administrativo intuitivo"
      ],
      price: "a partir de R$ 3.800",
      popular: false
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Sistemas Web",
      description: "Sistemas personalizados para automatizar processos e aumentar a eficiência do seu negócio.",
      features: [
        "Análise de requisitos detalhada",
        "Desenvolvimento sob medida",
        "Integração com sistemas existentes",
        "Painel administrativo completo",
        "Treinamento da equipe incluído"
      ],
      price: "a partir de R$ 8.900",
      popular: true
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Automação WhatsApp",
      description: "Soluções de atendimento automatizado via WhatsApp integradas aos seus sistemas.",
      features: [
        "Chatbot personalizado",
        "Atendimento automático 24/7",
        "Respostas inteligentes com IA",
        "Integração com CRM e ERP",
        "Relatórios de desempenho"
      ],
      price: "a partir de R$ 2.500",
      popular: false
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Soluções com IA",
      description: "Desenvolvimento de soluções com inteligência artificial para otimizar processos.",
      features: [
        "Análise de dados avançada",
        "Automação de tarefas repetitivas",
        "Chatbots inteligentes",
        "Reconhecimento de padrões",
        "Tomada de decisão assistida"
      ],
      price: "a partir de R$ 12.000",
      popular: false
    }
  ];

  const featuredService = services.find(service => service.popular);

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm mb-4">
            <span>Serviços Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Soluções digitais que <span className="text-gradient-gray">geram resultados</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos serviços completos em desenvolvimento digital, criados especificamente 
            para impulsionar seu negócio e maximizar seu ROI.
          </p>
        </motion.div>
        
        {/* Featured Service */}
        {featuredService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-elegant">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium mb-6">
                    Mais Procurado
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {featuredService.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {featuredService.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">O que está incluído:</h4>
                    <ul className="space-y-3">
                      {featuredService.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-900 dark:text-white mr-3 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {featuredService.price}
                    </div>
                    <a 
                      href="#contact" 
                      className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:shadow-lg flex items-center gap-2 transition-all"
                    >
                      <span>Solicitar proposta</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop" 
                    alt={featuredService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 max-w-xs mx-8 shadow-lg">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Por que escolher nosso {featuredService.title.toLowerCase()}?</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Nossa equipe especializada já desenvolveu mais de 50 sistemas personalizados com 100% de satisfação dos clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.filter(service => !service.popular).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-elegant hover:shadow-lg transition-shadow group"
            >
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl inline-block text-gray-900 dark:text-white">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-3">Inclui:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-gray-900 dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {service.price}
                </div>
                <a
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:underline"
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-elegant"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Tecnologias de <span className="text-gradient-gray">última geração</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                Utilizamos as tecnologias mais avançadas do mercado para criar soluções 
                escaláveis, seguras e de alto desempenho.
              </p>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              {[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/typescript.svg", 
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
              ].map((tech, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img src={tech} alt={`Tech ${index}`} className="h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
