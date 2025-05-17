
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-t3rn-black bg-grid">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-t3rn-silver">
              <span className="text-t3rn-blue">Sobre</span> Nós
            </h2>
            
            <div className="space-y-6 text-t3rn-silver/80">
              <p>
                Somos a <span className="text-t3rn-silver font-semibold">T3RN Desenvolvimento</span>, 
                uma empresa especializada em criar soluções digitais que transformam ideias em 
                realidade através de tecnologia e inovação.
              </p>
              
              <p>
                Nossa equipe reúne talento, paixão e experiência para desenvolver produtos 
                digitais com o mais alto padrão de qualidade, sempre focados em gerar 
                resultados reais para nossos clientes.
              </p>
              
              <div className="pt-4">
                <h3 className="text-t3rn-blue font-semibold text-lg mb-3">Nossos valores</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><span className="text-t3rn-blue font-medium">T</span>ecnologia de ponta</li>
                  <li><span className="text-t3rn-blue font-medium">E</span>xcelência em cada detalhe</li>
                  <li><span className="text-t3rn-blue font-medium">R</span>esultados mensuráveis</li>
                  <li><span className="text-t3rn-blue font-medium">N</span>ossa paixão por inovação</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-custom overflow-hidden border-2 border-t3rn-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="T3RN Team Working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              />
              
              {/* Overlay with code snippet */}
              <div className="absolute inset-0 bg-gradient-to-t from-t3rn-black/90 to-transparent flex items-end p-6">
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 w-full">
                  <pre className="code-text text-xs md:text-sm text-t3rn-silver overflow-x-auto">
                    <code>
                    <span className="text-t3rn-blue">const</span> <span className="text-t3rn-silver/80">t3rn</span> = {"{"}
                      <br />
                      &nbsp;&nbsp;passion: <span className="text-t3rn-blue">"development"</span>,
                      <br />
                      &nbsp;&nbsp;expertise: [<span className="text-t3rn-blue">"web"</span>, <span className="text-t3rn-blue">"mobile"</span>, <span className="text-t3rn-blue">"AI"</span>],
                      <br />
                      &nbsp;&nbsp;mission: <span className="text-t3rn-blue">"transform ideas into solutions"</span>
                      <br />
                      {"}"};
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-2 border-t3rn-blue/20 rounded-custom -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-t3rn-blue/40 rounded-full -z-10"></div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { number: "50+", label: "Projetos entregues" },
            { number: "98%", label: "Clientes satisfeitos" },
            { number: "5+", label: "Anos de experiência" },
            { number: "24/7", label: "Suporte técnico" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-custom bg-secondary border border-border hover:border-t3rn-blue/50 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-t3rn-blue mb-2">{stat.number}</div>
              <div className="text-t3rn-silver/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
