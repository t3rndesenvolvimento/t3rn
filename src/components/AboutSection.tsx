
import { motion } from "framer-motion";
import { Check, Award, Clock, Users, Star, Lightbulb, Shield, Globe, Target, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-t3rn-red-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-t3rn-silver-700/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-t3rn-red-400/10 border border-t3rn-red-400/20 rounded-full text-sm font-medium text-t3rn-red-400 mb-4">
            SOBRE A T3RN
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cashDisplay font-bold mb-6 text-white">
            Inovação com <span className="text-gradient-silver">propósito</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Transformamos sua visão em soluções digitais inovadoras que impulsionam o crescimento
            do seu negócio e entregam experiências memoráveis aos seus clientes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Our Story */}
              <div>
                <h3 className="text-2xl font-cashDisplay font-bold text-white mb-4 inline-flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-t3rn-red-400/20 text-t3rn-red-400 mr-3">
                    <Lightbulb className="w-5 h-5" />
                  </span>
                  Nossa História
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nascemos da paixão por tecnologia e da visão de que o desenvolvimento digital de qualidade 
                  deveria ser acessível a todos os negócios. Desde 2019, construímos uma reputação de 
                  excelência técnica e criativa, entregando soluções que combinam inovação, estética e 
                  funcionalidade.
                </p>
              </div>
              
              {/* Our Mission */}
              <div>
                <h3 className="text-2xl font-cashDisplay font-bold text-white mb-4 inline-flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-t3rn-silver-700/20 text-t3rn-silver-400 mr-3">
                    <Target className="w-5 h-5" />
                  </span>
                  Nossa Missão
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Capacitar empresas através de tecnologia inovadora que resolve problemas reais, 
                  impulsiona o crescimento e fortalece a conexão com seus clientes. Acreditamos que 
                  cada negócio merece uma presença digital que potencializa suas oportunidades no mundo moderno.
                </p>
              </div>
              
              {/* Core Values */}
              <div>
                <h3 className="text-2xl font-cashDisplay font-bold text-white mb-4 inline-flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-t3rn-red-400/20 text-t3rn-red-400 mr-3">
                    <Star className="w-5 h-5" />
                  </span>
                  Nossos Valores
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "Excelência", icon: <Award className="w-4 h-4" /> },
                    { value: "Inovação", icon: <Rocket className="w-4 h-4" /> },
                    { value: "Integridade", icon: <Shield className="w-4 h-4" /> },
                    { value: "Colaboração", icon: <Users className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="text-t3rn-silver-400 mr-2">{item.icon}</span>
                      <span className="text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Team Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(220,38,38,0.2)] border border-t3rn-red-400/30">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="T3RN Team Collaboration" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Quote */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <blockquote className="text-white italic text-lg">
                  "Acreditamos que o futuro digital é construído hoje, com cada linha de código que escrevemos."
                </blockquote>
                <div className="mt-2 text-t3rn-silver-400 font-medium">Ricardo Oliveira, CEO</div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { number: "5+", label: "Anos de experiência", icon: <Clock className="w-5 h-5" /> },
                { number: "100+", label: "Projetos entregues", icon: <Rocket className="w-5 h-5" /> },
                { number: "98%", label: "Clientes satisfeitos", icon: <Star className="w-5 h-5" /> },
                { number: "24/7", label: "Suporte dedicado", icon: <Shield className="w-5 h-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-800 hover:border-t3rn-red-400/50 transition-all shadow-lg"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-t3rn-silver-400/20 flex items-center justify-center text-t3rn-silver-400 mr-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 border-2 border-t3rn-red-400 rounded-xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-t3rn-silver-700 rounded-full -z-10 hidden md:block"></div>
          </motion.div>
        </div>
        
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-800 p-8 md:p-12 bg-gradient-to-br from-black to-gray-900 shadow-xl relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-t3rn-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-t3rn-silver-700/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-cashDisplay font-bold text-white mb-8 text-center">
              Por que escolher a <span className="text-gradient-silver">T3RN</span>?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Soluções Personalizadas",
                  description: "Criamos soluções sob medida para atender às necessidades específicas do seu negócio",
                  icon: <Target className="w-6 h-6" />,
                  color: "bg-t3rn-red-400/20 text-t3rn-red-400"
                },
                {
                  title: "Equipe Especializada",
                  description: "Desenvolvedores, designers e estrategistas com anos de experiência no mercado",
                  icon: <Users className="w-6 h-6" />,
                  color: "bg-t3rn-silver-700/20 text-t3rn-silver-400"
                },
                {
                  title: "Resultados Comprovados",
                  description: "Histórico de sucesso com clientes de diversos setores e portes",
                  icon: <Award className="w-6 h-6" />,
                  color: "bg-t3rn-red-400/20 text-t3rn-red-400"
                },
                {
                  title: "Suporte Contínuo",
                  description: "Acompanhamento e suporte técnico para garantir o sucesso contínuo do seu projeto",
                  icon: <Shield className="w-6 h-6" />,
                  color: "bg-t3rn-silver-700/20 text-t3rn-silver-400"
                },
                {
                  title: "Tecnologia de Ponta",
                  description: "Utilizamos as mais recentes tecnologias para desenvolver soluções modernas e eficientes",
                  icon: <Rocket className="w-6 h-6" />,
                  color: "bg-t3rn-red-400/20 text-t3rn-red-400"
                },
                {
                  title: "Presença Global",
                  description: "Atendemos clientes no Brasil e no exterior, com soluções adaptadas para o mercado global",
                  icon: <Globe className="w-6 h-6" />,
                  color: "bg-t3rn-silver-700/20 text-t3rn-silver-400"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-t3rn-red-400/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-cashDisplay font-bold text-white mb-6">
            Pronto para transformar sua presença digital?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a alcançar todo o seu potencial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-t3rn-red-400 to-t3rn-red-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-t3rn-red-400/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Fale Conosco
            </motion.a>
            <motion.a 
              href="/orcamento"
              className="px-8 py-3 bg-transparent border border-t3rn-silver-400/50 text-t3rn-silver-400 font-medium rounded-lg hover:bg-t3rn-silver-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Orçamento
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
