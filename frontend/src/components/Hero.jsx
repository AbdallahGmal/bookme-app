// src/components/Hero.jsx
import React from 'react';
import { FiUser } from 'react-icons/fi'; // Using react-icons

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-32 grid md:grid-cols-2 gap-8 items-center">
      {/* Left Side: Text Content */}
      <div className="flex flex-col space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Find Your <span className="text-blue-600">Perfect</span>
          <br />
          Place to Stay.
        </h1>
        <p className="text-lg text-gray-600">
          Slip your Body Mind and spirit of relaxation in calm atmosphere.
          We are here fo help you find the best hotel at less price worldwide with flexible payment.
        </p>
        <button className="flex items-center justify-center w-48 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          <FiUser className="mr-2" />
          Start Your Search
        </button>
      </div>

      {/* Right Side: Images */}
      <div className="hidden md:flex space-x-4 relative h-96">
        {/* Price Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg flex items-center z-10">
          <img 
            src="https://placehold.co/40x40/E2E8F0/333?text=User" // Placeholder for user image
            alt="User" 
            className="w-8 h-8 rounded-full mr-2" 
          />
          <span className="font-semibold text-sm">✨ Best price guaranteed</span>
        </div>
        
        {/* Image 1: Hotel Room */}
        <div className="w-1/2 h-full rounded-3xl overflow-hidden shadow-2xl transform -translate-y-4 -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" // Real placeholder
            alt="Hotel Interior"
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Image 2: Beach */}
        <div className="w-1/2 h-full rounded-3xl overflow-hidden shadow-2xl transform translate-y-4 rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" // Real placeholder
            alt="Beach"
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;