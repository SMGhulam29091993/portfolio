import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "sonner";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openContactModal = () => setIsContactModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/30 selection:text-primary">
      <Toaster position="top-center" expand={true} richColors />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar onContactClick={openContactModal} />

      <section id="home">
        <HeroSection onContactClick={openContactModal} />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection onContactClick={openContactModal} />
      </section>

      <section id="contact">
        <ContactSection onContactClick={openContactModal} />
      </section>

      <Footer />

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
