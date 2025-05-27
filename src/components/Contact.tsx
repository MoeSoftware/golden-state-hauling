import React from "react";
import { Phone, Clock, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-amber-500" />,
      title: "Call For a Quote",
      details: "(916) 510-5355",
      action: "tel:+19165105355",
      actionText: "Call Now",
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      title: "Service Area",
      details: "Lincoln, CA and surrounding areas.",
      action: null,
      actionText: null,
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-500" />,
      title: "Email Us",
      details: "goldenhaulingandcleaning@gmail.com",
      action: "mailto:goldenhaulingandcleaning@gmail.com",
      actionText: "Send Email",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to clear out your space or need equipment transported? We're
            just a phone call away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.details}</p>

              {item.action && (
                <a
                  href={item.action}
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  {item.actionText}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg mt-12 p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Need a Quote Fast?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We pride ourselves on quick responses and competitive pricing. Give
            us a call today!
          </p>
          <a
            href="tel:+19165105355"
            className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            (916) 510-5355
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
