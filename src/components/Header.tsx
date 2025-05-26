import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-amber-500" />
            <div className="ml-2">
              <h1 className="text-xl font-bold text-blue-900">
                Golden State <span className="text-amber-500">Hauling</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">& Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-800 hover:text-amber-500' : 'text-gray-800 hover:text-amber-500'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+19165105355"
              className="text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md transition-colors duration-200"
            >
              Call For Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-800 hover:text-amber-500 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+19165105355"
              className="block text-white bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call For Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;