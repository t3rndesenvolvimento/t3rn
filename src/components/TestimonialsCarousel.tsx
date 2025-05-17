
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsCarouselProps {
  autoPlay?: boolean;
}

export default function TestimonialsCarousel({ autoPlay = true }: TestimonialsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?w=800&auto=format&fit=crop",
      content: "A T3RN foi fundamental para o crescimento da nossa empresa. Aumentamos nossa conversão em 220% após o lançamento do novo site, superando todas as expectativas.",
      rating: 5,
      videoUrl: "https://example.com/testimonial1"
    },
    {
      name: "Ana Ferreira",
      company: "Design Studio",
      role: "Diretora de Marketing",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop",
      content: "Incrível como o sistema simplificou nossos processos. Os clientes elogiam o novo sistema de agendamento, e economizamos 15 horas semanais em tarefas administrativas.",
      rating: 5,
      videoUrl: "https://example.com/testimonial2"
    },
    {
      name: "Pedro Santos",
      company: "E-commerce Express",
      role: "Proprietário",
      image: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=800&auto=format&fit=crop",
      content: "A integração entre o site e o WhatsApp multiplicou nossas vendas. Os clientes adoram a facilidade de compra e atendimento imediato.",
      rating: 5,
      videoUrl: "https://example.com/testimonial3"
    }
  ];
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay && !isHovering) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoPlay, isHovering, testimonials.length]);

  const navigateToSlide = (index: number) => {
    setCurrentSlide(index);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm mb-4">
            <span>Casos de Sucesso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            O que nossos clientes estão <span className="text-gradient-gray">dizendo</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mais de 200 empresas já transformaram seus negócios com nossas soluções digitais
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0.4, scale: currentSlide === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-elegant"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5">
                      {/* Left column - Image and rating */}
                      <div className="md:col-span-2 relative">
                        <div className="aspect-square h-full">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Play button for video testimonial */}
                        <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right column - Content */}
                      <div className="md:col-span-3 p-8 flex flex-col justify-center relative">
                        <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-200 dark:text-gray-700 -z-10" />
                        
                        <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                          "{testimonial.content}"
                        </blockquote>
                        
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                        </div>
                        
                        {/* Video link */}
                        <a 
                          href={testimonial.videoUrl}
                          className="inline-flex items-center mt-6 text-gray-900 dark:text-white font-medium hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M15.5 12L10 15.5V8.5L15.5 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                          </svg>
                          Assistir depoimento completo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={() => navigateToSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1)}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentSlide === index 
                      ? "w-8 bg-gray-900 dark:bg-white" 
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => navigateToSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1)}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          
          {/* Results metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { metric: "97%", description: "Taxa de satisfação dos clientes" },
              { metric: "+150%", description: "Média de aumento em conversões" },
              { metric: "90%", description: "Clientes que nos recomendam" }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-elegant text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{item.metric}</div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
