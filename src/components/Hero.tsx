import React from "react";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20">
      <div
        className="absolute inset-0 
            bg-[#F1E0C2] 
            opacity-90"
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/GSH&Clogo.jpg')",
          backgroundPosition: "center",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          height: "558px",
        }}
      ></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 h-[558px] flex items-end justify-center pb-16">
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
          <a
            href="tel:+19165105355"
            className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call For Quote: (916) 510-5355
          </a>
          <a
            href="#services"
            className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
