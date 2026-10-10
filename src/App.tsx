import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedQuoteService, setSelectedQuoteService] = useState<string | undefined>(undefined);

  // IntersectionObserver to accurately track the active section for sticky navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleSelectServiceQuote = (serviceTitle: string) => {
    setSelectedQuoteService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-[#d4af37] selection:text-[#030b1e]">
      {/* Sticky Top Navigation Menu */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(id) => setActiveSection(id)}
      />

      {/* Main Single Page Content */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero Slider */}
        <HeroSlider onSelectServiceQuote={handleSelectServiceQuote} />

        {/* Section 2: About Us & Fleet Infrastructure */}
        <AboutSection />

        {/* Section 3: Our Multimodal Services & Corridors */}
        <ServicesSection onSelectServiceQuote={handleSelectServiceQuote} />

        {/* Section 4: Modern Contact Form & Rate Calculator */}
        <ContactSection initialService={selectedQuoteService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
