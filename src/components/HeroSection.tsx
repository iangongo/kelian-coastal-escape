
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to KELIAN HOMES
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in opacity-90">
          Explore a world of luxury and serenity with us.
        </p>
        <a href="#properties" className="cta-button">
          Discover Our Properties
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
