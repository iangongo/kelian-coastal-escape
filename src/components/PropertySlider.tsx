
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Property data - this can be easily edited to add/remove properties
const properties = [
  {
    id: 1,
    name: "Ocean View Villa",
    description: "Luxurious 3-bedroom villa with private pool and stunning ocean views",
    rate: "From Ksh 15,000/night",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Beach Cottage",
    description: "Charming 2-bedroom cottage just steps away from the pristine Kilifi beach",
    rate: "From Ksh 8,000/night",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Tropical Paradise",
    description: "Spacious 4-bedroom home surrounded by lush tropical gardens",
    rate: "From Ksh 12,000/night",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Riverside Retreat",
    description: "Peaceful 2-bedroom cottage with direct access to Kilifi Creek",
    rate: "From Ksh 9,000/night",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
  }
];

const PropertySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };
  
  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  // Calculate visible slides based on current viewport
  // We'll show 1 on mobile, 2 on tablets, and 3 on desktop
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };
  
  const visibleCount = getVisibleCount();
  
  // Calculate which properties to show based on current slide and visible count
  const visibleProperties = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % properties.length;
      result.push(properties[index]);
    }
    return result;
  };

  return (
    <section id="properties" className="section-padding bg-coastal-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="heading-underline">Featured Rentals</span>
        </h2>
        
        <div className="property-slider">
          {/* Slider Navigation */}
          <button 
            className="slider-nav prev"
            onClick={prevSlide}
            aria-label="Previous property"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="slider-nav next"
            onClick={nextSlide}
            aria-label="Next property"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Property Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProperties().map((property) => (
              <div key={property.id} className="property-slide bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-3">{property.description}</p>
                  <p className="font-semibold text-coastal-skyblue">{property.rate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://wa.me/254715372672?text=I'm%20interested%20in%20booking%20a%20property"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
