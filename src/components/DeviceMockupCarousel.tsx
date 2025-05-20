
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface DeviceMockupCarouselProps {
  images: { id: number; url: string; title: string }[];
  className?: string;
}

const DeviceMockupCarousel: React.FC<DeviceMockupCarouselProps> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto", className)}>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Desktop/Tablet Mockup */}
        <div className="relative w-full max-w-xl">
          <div className="relative bg-t3rn-black rounded-xl border-[14px] border-t3rn-gray-800 shadow-xl aspect-[16/10]">
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <Carousel 
                opts={{ loop: true }}
                onSelect={(index) => setActiveIndex(index)}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {images.map((image, index) => (
                    <CarouselItem key={image.id} className="h-full">
                      <AspectRatio ratio={16/10} className="h-full">
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <div className="absolute bottom-4 left-0 right-0">
                  <div className="flex justify-center gap-2">
                    {images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-colors ${
                          activeIndex === idx ? "bg-t3rn-highlight" : "bg-gray-400/50"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <CarouselPrevious variant="outline" size="sm" className="absolute left-2 bg-black/40 border-t3rn-gray-700/50 backdrop-blur-sm text-white hover:bg-black/60" />
                <CarouselNext variant="outline" size="sm" className="absolute right-2 bg-black/40 border-t3rn-gray-700/50 backdrop-blur-sm text-white hover:bg-black/60" />
              </Carousel>
            </div>
            
            {/* Camera notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[7px] w-4 h-4 bg-t3rn-gray-800 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-t3rn-gray-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Stand */}
          <div className="w-20 h-4 bg-gradient-to-b from-t3rn-gray-700 to-t3rn-gray-900 mx-auto rounded-b-lg"></div>
        </div>
        
        {/* Mobile Mockup */}
        <div className="relative w-full max-w-[200px]">
          <div className="relative bg-t3rn-black rounded-3xl border-[10px] border-t3rn-gray-800 shadow-xl aspect-[9/19]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <Carousel 
                opts={{ loop: true, startIndex: activeIndex }}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {images.map((image) => (
                    <CarouselItem key={`mobile-${image.id}`} className="h-full">
                      <AspectRatio ratio={9/19} className="h-full">
                        <img 
                          src={image.url} 
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-t3rn-gray-800 rounded-b-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Title for current slide */}
      <motion.div
        key={activeIndex}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="mt-8 text-center"
      >
        <h3 className="text-xl font-medium text-white">
          {images[activeIndex]?.title}
        </h3>
      </motion.div>
    </div>
  );
};

export default DeviceMockupCarousel;
