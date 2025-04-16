
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PropertySlider from '@/components/PropertySlider';
import ExperiencesSection from '@/components/ExperiencesSection';
import ManagementSection from '@/components/ManagementSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PropertySlider />
      <ExperiencesSection />
      <ManagementSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
