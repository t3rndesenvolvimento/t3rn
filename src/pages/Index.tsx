
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-200 overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 dark:bg-gray-100 origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />
      
      <main>
        <HeroSection />
        <WorkProcess />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsCarousel autoPlay={!isScrolling} />
        <PaymentMethods />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Interactive components */}
      <AIChat />
      <InfoModal />
      <Notification delay={7000} />
    </div>
  );
};

export default Index;
