
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  image: string;
  comment: string;
  rating: number;
};

export default function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      company: "TechSoft",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "A T3RN transformou completamente nosso site. A performance melhorou mais de 70% e as conversões aumentaram significativamente.",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Luiza",
      company: "Mercado Digital",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "Implementaram um sistema de gestão que revolucionou nossos processos internos. Profissionalismo e qualidade impecáveis.",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Almeida",
      company: "Style Store",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      comment: "A integração com WhatsApp desenvolvida pela T3RN aumentou nossa taxa de resposta em 85%. Recomendo fortemente.",
      rating: 4
    },
    {
      id: 4,
      name: "Juliana Costa",
      company: "Edu Tech",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      comment: "A solução com IA personalizada superou todas as expectativas. Agora conseguimos responder dúvidas dos alunos 24/7.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-t3rn-silver">
            O que nossos <span className="text-t3rn-blue">clientes</span> dizem
          </h2>
          <p className="text-lg text-t3rn-silver/70 max-w-3xl mx-auto">
            Feedback de quem já transformou sua presença digital com nossas soluções
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-custom p-6 h-full flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-t3rn-silver">{testimonial.name}</h4>
                      <p className="text-sm text-t3rn-silver/60">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-t3rn-blue fill-t3rn-blue" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-t3rn-silver/80 italic relative">
                      <MessageSquare className="w-8 h-8 opacity-10 absolute -top-1 -left-2" />
                      <p className="relative z-10">{testimonial.comment}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static transform-none bg-secondary hover:bg-muted" />
            <CarouselNext className="static transform-none bg-secondary hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
