
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ManagementSection = () => {
  return (
    <section id="management" className="section-padding bg-coastal-blue">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="heading-underline">Property Management Services</span>
          </h2>
          <p className="text-lg mb-10">
            Own a vacation home in Kilifi? Let us handle every aspect of your property management, 
            from bookings to maintenance, so you can enjoy peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Guest Handling</h3>
            <p className="mb-4">Professional check-ins, around-the-clock support, and personalized attention for your guests.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>24/7 guest communication</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Seamless check-in/out</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Local recommendations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Booking Management</h3>
            <p className="mb-4">Maximize your property's occupancy and revenue with our strategic booking management.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Dynamic pricing strategies</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Listing optimization</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Regular performance reports</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Property Maintenance</h3>
            <p className="mb-4">Keep your property in perfect condition with our comprehensive maintenance services.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Regular inspections</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Quality cleaning services</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-coastal-skyblue mt-2 mr-3"></div>
                <span>Preventative maintenance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-8">
            Contact us today to discuss how we can help maximize your property's potential 
            while minimizing your management burden.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:kelianhomeske@gmail.com"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              Contact via Email
            </a>
            <a 
              href="https://wa.me/254715372672?text=I'm%20interested%20in%20property%20management%20services"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
