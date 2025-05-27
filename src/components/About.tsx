import React from "react";
import { CheckCircle, Clock, Map, ThumbsUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
      title: "Licensed & Insured",
      description:
        "We maintain all required licenses and insurance for your peace of mind.",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Prompt Service",
      description:
        "We respect your time with punctual arrivals and efficient service.",
    },
    {
      icon: <Map className="h-6 w-6 text-amber-500" />,
      title: "Local Expertise",
      description:
        "Serving Lincoln and surrounding areas with comprehensive knowledge of local disposal regulations.",
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-amber-500" />,
      title: "Satisfaction Guaranteed",
      description:
        "We're not happy until you're completely satisfied with our work.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About Golden State Hauling & Cleaning
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Golden State Hauling & Cleaning, we're Lincoln's trusted choice
              for reliable, efficient, and affordable hauling and junk removal
              services for residential and commercial customers.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With years of experience serving the Lincoln community, our team
              handles everything from residential cleanouts to equipment
              transport with professionalism and care. We're committed to
              environmentally responsible disposal practices and excellent
              customer service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="./assets/img1.jpg"
                    alt="Professional junk removal service in Lincoln CA"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="./assets/img2.jpg"
                    alt="Equipment transport services Lincoln California"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="./assets/img3.jpg"
                    alt="Residential cleanout services near Lincoln"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
