
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("todos");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com integração de pagamentos e sistema de gestão.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tags: ["react", "node", "mongodb"],
      link: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados em tempo real com gráficos dinâmicos.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      tags: ["react", "chart.js", "api"],
      link: "#"
    },
    {
      id: 3,
      title: "App de Delivery",
      description: "Aplicativo mobile para entrega de produtos com rastreamento em tempo real.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
      tags: ["react-native", "node", "mongodb"],
      link: "#"
    },
    {
      id: 4,
      title: "Sistema CRM",
      description: "Sistema de gestão de relacionamento com clientes e automatização de marketing.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      tags: ["vue", "laravel", "mysql"],
      link: "#"
    }
  ];
  
  const filters = [
    { name: "Todos", value: "todos" },
    { name: "React", value: "react" },
    { name: "Node", value: "node" },
    { name: "Mobile", value: "react-native" },
  ];
  
  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-t3rn-black bg-grid">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            <span className="text-t3rn-blue">Nossos</span> Projetos
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl">
            Conheça algumas soluções que desenvolvemos para nossos clientes. 
            Cada projeto é único e desenvolvido com foco nas necessidades específicas.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.value 
                  ? "bg-t3rn-blue text-black font-medium"
                  : "bg-secondary text-t3rn-silver/80 hover:bg-muted"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-custom overflow-hidden border border-border hover:border-t3rn-blue/50 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex gap-2">
                    <a 
                      href={project.link} 
                      className="p-2 rounded-full bg-t3rn-blue/80 hover:bg-t3rn-blue transition-colors"
                      aria-label="Ver projeto"
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 rounded-full bg-t3rn-silver/80 hover:bg-t3rn-silver transition-colors"
                      aria-label="Ver código"
                    >
                      <Github className="w-5 h-5 text-black" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-t3rn-silver">{project.title}</h3>
                <p className="text-t3rn-silver/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-t3rn-silver/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
