
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BentoGrid from '../components/BentoGrid';
import DemoVideoSection from '../components/DemoVideoSection';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <DemoVideoSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
