import React from 'react';
import { CheckCircle, Clock, Map, ThumbsUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
      title: 'Licensed & Insured',
      description: 'We maintain all required licenses and insurance for your peace of mind.'
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: 'Prompt Service',
      description: 'We respect your time with punctual arrivals and efficient service.'
    },
    {
      icon: <Map className="h-6 w-6 text-amber-500" />,
      title: 'Local Expertise',
      description: 'Our local knowledge ensures we handle all regulations and disposal requirements.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-amber-500" />,
      title: 'Satisfaction Guaranteed',
      description: 'We\'re not happy until you\'re completely satisfied with our work.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">About Golden Hauling & Cleaning</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Golden State Hauling & Cleaning, we're dedicated to providing reliable, efficient, and affordable hauling and junk removal services for residential and commercial customers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With years of experience in the industry, our team handles everything from residential cleanouts to equipment transport with professionalism and care.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hauling service" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-[60%]">
              <img 
                src="https://images.pexels.com/photos/5758555/pexels-photo-5758555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Construction equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;