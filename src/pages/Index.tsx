
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import ResumeSection from "@/components/ResumeSection"
import Footer from "@/components/Footer"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"

const Index = () => {
  // Smooth scroll functionality for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href')
        if (!href) return
        
        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="flex min-h-svh w-full flex-col overflow-x-hidden">
      <Navbar />
      
      <section id="hero">
        <HeroGeometric 
          badge="Portfolio"
          title1="Crafting Elegant"
          title2="Digital Experiences"
        />
      </section>
      
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <ResumeSection />
      <Footer />
    </div>
  );
};

export default Index;
