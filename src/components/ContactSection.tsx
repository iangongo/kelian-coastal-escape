
import React from 'react';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="heading-underline">Get In Touch</span>
          </h2>
          <p className="text-lg mb-12">
            Have questions or ready to book your stay? We're here to help you plan your perfect Kilifi getaway.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-8">
            <a 
              href="https://wa.me/254715372672"
              className="flex flex-col items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-5 bg-coastal-blue rounded-full mb-4 group-hover:bg-coastal-skyblue transition-all duration-300">
                <MessageCircle size={28} className="text-coastal-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 group-hover:text-coastal-skyblue transition-all duration-300">+254 715 372 672</p>
            </a>
            
            <a 
              href="mailto:kelianhomeske@gmail.com"
              className="flex flex-col items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-5 bg-coastal-blue rounded-full mb-4 group-hover:bg-coastal-skyblue transition-all duration-300">
                <Mail size={28} className="text-coastal-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 group-hover:text-coastal-skyblue transition-all duration-300">kelianhomeske@gmail.com</p>
            </a>
            
            <a 
              href="https://www.instagram.com/kelianhomes"
              className="flex flex-col items-center group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-5 bg-coastal-blue rounded-full mb-4 group-hover:bg-coastal-skyblue transition-all duration-300">
                <Instagram size={28} className="text-coastal-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 group-hover:text-coastal-skyblue transition-all duration-300">@kelianhomes</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
