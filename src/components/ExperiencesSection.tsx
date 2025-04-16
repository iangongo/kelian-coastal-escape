
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="heading-underline">Custom Itinerary Planning</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience Kilifi like a local with our custom itinerary planning services. We curate memorable experiences tailored to your preferences:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <p><strong>Dhow Sunset Cruises</strong> - Sail through Kilifi Creek on a traditional wooden dhow while enjoying breathtaking sunset views.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <p><strong>Cultural Tours</strong> - Immerse yourself in local Mijikenda culture with guided visits to traditional villages and sacred kaya forests.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <p><strong>Beach Picnics</strong> - Enjoy private beach setups with gourmet food and refreshments in secluded coastal spots.</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <p><strong>Water Activities</strong> - From snorkeling at the marine reserve to paddleboarding on Kilifi Creek, we arrange it all.</p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/254715372672?text=I'm%20interested%20in%20custom%20itinerary%20planning"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Plan Your Experience
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-48 md:h-72">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
                alt="Dhow cruise" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-72 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80" 
                alt="Beach picnic" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-72">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
                alt="Cultural tour" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-72 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80" 
                alt="Water activities" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
