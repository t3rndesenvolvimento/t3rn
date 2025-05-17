
import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-t3rn-black text-t3rn-silver overflow-x-hidden"
    >
      <Navbar />
      
      <main>
        <HeroSection />
        <WorkProcess />
        <ProjectsSection />
        <TestimonialsCarousel />
        <ServicesSection />
        <PaymentMethods />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Componentes interativos */}
      <AIChat />
      <InfoModal />
      <Notification delay={10000} />
    </motion.div>
  );
};

export default Index;
