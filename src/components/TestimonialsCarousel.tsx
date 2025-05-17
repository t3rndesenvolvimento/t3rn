
// This is a new file we are creating since we can't modify the original in read-only files
// We'll create a wrapper component that adds auto-play functionality

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface TestimonialsCarouselProps {
  autoPlay?: boolean;
}

export default function TestimonialsCarousel({ autoPlay = true }: TestimonialsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "A equipe da T3RN superou todas as expectativas. Nosso site não só ficou visualmente impressionante, mas também teve um aumento significativo na conversão de clientes.",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      company: "Estúdio Criativo",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Profissionais extremamente dedicados e talentosos. O sistema que desenvolveram revolucionou nossos processos internos, economizando tempo e recursos.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      company: "Comércio Digital",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      content: "A integração com WhatsApp que a T3RN desenvolveu para nossa loja virtual aumentou nossas vendas em 40%. Recomendo sem hesitar!",
      rating: 4
    },
    {
      name: "Ana Ferreira",
      company: "Consultoria Empresarial",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      content: "O atendimento é ágil e as soluções são inovadoras. Trabalham com prazos realistas e entregam sempre antes do esperado.",
      rating: 5
    }
  ];
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  return (
    <section className="py-20 bg-t3rn-black">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-cashDisplay mb-4 text-t3rn-silver">
            O que nossos <span className="text-gradient-gray">clientes</span> dizem
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            A satisfação de nossos clientes é a nossa maior conquista
          </p>
        </motion.div>
        
        <div className="relative">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0.4, scale: index === currentSlide ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-border rounded-xl p-8 shadow-glow relative"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full border-2 border-t3rn-gray-600 object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-t3rn-gray-500 text-t3rn-gray-500" />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={i + testimonial.rating} className="w-5 h-5 text-t3rn-gray-700" />
                          ))}
                        </div>
                        <blockquote className="text-t3rn-silver/80 mb-4 italic">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="font-satoshi">
                          <h4 className="font-semibold text-t3rn-silver">{testimonial.name}</h4>
                          <p className="text-sm text-t3rn-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden md:block">
              <CarouselPrevious onClick={() => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="bg-t3rn-gray-800 border-t3rn-gray-700 hover:bg-t3rn-gray-700 text-white" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
              <CarouselNext onClick={() => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="bg-t3rn-gray-800 border-t3rn-gray-700 hover:bg-t3rn-gray-700 text-white" />
            </div>
          </Carousel>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="flex items-center justify-center"
              >
                <div
                  className={`slide-indicator w-${index === currentSlide ? '8' : '3'}`}
                  style={{ 
                    width: index === currentSlide ? '2rem' : '0.5rem',
                    height: '0.25rem',
                    opacity: index === currentSlide ? 1 : 0.5
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
