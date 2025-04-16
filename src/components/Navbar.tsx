
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-coastal-dark' : 'text-white'}`}>
            KELIAN HOMES
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#properties" className={`font-medium ${isScrolled ? 'text-coastal-dark' : 'text-white'} hover:text-coastal-skyblue transition-all`}>Properties</a>
            <a href="#experiences" className={`font-medium ${isScrolled ? 'text-coastal-dark' : 'text-white'} hover:text-coastal-skyblue transition-all`}>Experiences</a>
            <a href="#management" className={`font-medium ${isScrolled ? 'text-coastal-dark' : 'text-white'} hover:text-coastal-skyblue transition-all`}>Management</a>
            <a href="#contact" className={`font-medium ${isScrolled ? 'text-coastal-dark' : 'text-white'} hover:text-coastal-skyblue transition-all`}>Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-coastal-dark' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-coastal-dark' : 'text-white'} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <a href="#properties" className="px-3 py-2 text-coastal-dark hover:bg-coastal-blue rounded-md" onClick={() => setIsMenuOpen(false)}>Properties</a>
              <a href="#experiences" className="px-3 py-2 text-coastal-dark hover:bg-coastal-blue rounded-md" onClick={() => setIsMenuOpen(false)}>Experiences</a>
              <a href="#management" className="px-3 py-2 text-coastal-dark hover:bg-coastal-blue rounded-md" onClick={() => setIsMenuOpen(false)}>Management</a>
              <a href="#contact" className="px-3 py-2 text-coastal-dark hover:bg-coastal-blue rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
