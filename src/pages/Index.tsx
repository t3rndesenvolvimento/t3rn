
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import WorkProcess from "@/components/WorkProcess";
import PaymentMethods from "@/components/PaymentMethods";
import AIChat from "@/components/AIChat";
import InfoModal from "@/components/InfoModal";
import Notification from "@/components/Notification";
import { useEffect, useState } from "react";

const Index = () => {
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  // Auto scroll detection (pause when user is scrolling manually)
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-t3rn-black text-t3rn-silver overflow-x-hidden"
    >
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-t3rn-gray-600 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />
      
      <main>
        <HeroSection />
        <WorkProcess />
        <ProjectsSection />
        <TestimonialsCarousel autoPlay={!isScrolling} />
        <ServicesSection />
        <PaymentMethods />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Componentes interativos */}
      <AIChat />
      <InfoModal />
      <Notification delay={7000} />
    </motion.div>
  );
};

export default Index;
