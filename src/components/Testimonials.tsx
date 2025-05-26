import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Golden Hauling made my garage cleanout so easy! They were prompt, professional, and took everything I needed removed. Highly recommend their services!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Construction Manager',
      content: 'We use Golden for all our equipment transport needs. Their team is reliable and careful with our machinery. Great service at competitive rates.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Real Estate Agent',
      content: 'As a realtor, I need reliable cleanout services for estate properties. Golden Hauling has become my go-to company. They\'re thorough and make properties show-ready.',
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our hauling and removal services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-400'}`} 
                  />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;