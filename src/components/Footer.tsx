
import React from 'react';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coastal-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl font-bold mb-2">KELIAN HOMES</h3>
            <p className="text-sm opacity-70">Your luxury getaway in Kilifi, Kenya</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://wa.me/254715372672"
              className="text-white hover:text-coastal-skyblue transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a 
              href="mailto:kelianhomeske@gmail.com"
              className="text-white hover:text-coastal-skyblue transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.instagram.com/kelianhomes"
              className="text-white hover:text-coastal-skyblue transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="text-sm opacity-70">
            &copy; {currentYear} KELIAN HOMES. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
