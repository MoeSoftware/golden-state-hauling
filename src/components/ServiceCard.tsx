import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceType } from '../types';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`rounded-lg shadow-md p-6 transition-all duration-300 ${service.backgroundColor} ${service.hoverColor} transform hover:-translate-y-1`}
    >
      <div className="flex items-center mb-4">
        <span className="mr-2 text-2xl">{service.emoji}</span>
        <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{service.description}</p>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-amber-600 hover:text-amber-700 font-medium mb-4"
      >
        {isExpanded ? (
          <>
            <span>View Less</span>
            <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            <span>View All Services</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </button>
      
      <ul className={`space-y-2 transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-24'}`}>
        {service.items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;