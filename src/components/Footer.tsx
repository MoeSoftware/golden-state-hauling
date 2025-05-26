import React from 'react';
import { Truck, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-amber-500" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">
                  Golden State <span className="text-amber-500">Hauling</span>
                </h3>
                <p className="text-xs text-blue-200 -mt-1">& Cleaning Services</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Professional hauling, junk removal, and equipment transport services you can count on.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-amber-500 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-500 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-500 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-blue-200 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Equipment Transport
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Material Dumping
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Residential Cleanouts
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-200">
                  Estate Cleanouts
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">
                <span className="font-semibold">Phone:</span> (916) 510-5355
              </li>
              <li className="text-blue-200">
                <span className="font-semibold">Email:</span> info@goldenhauling.com
              </li>
              <li className="text-blue-200">
                <span className="font-semibold">Hours:</span> Mon-Sat: 7am-7pm
              </li>
              <li className="text-blue-200">
                <span className="font-semibold">Address:</span> 123 Hauling Lane, Cityville, ST 12345
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © {currentYear} Golden State Hauling & Cleaning Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;