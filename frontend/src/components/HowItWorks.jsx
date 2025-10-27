// src/components/HowItWorks.jsx
import React from 'react';
// We'll use placeholder images for the illustrations
const steps = [
  { 
    title: 'Book & Relax', 
    description: 'Let each trip be an inspirational Journey, each room a peaceful space',
    image: 'https://placehold.co/150x150/E0F2FE/0284C7?text=Step+1' 
  },
  { 
    title: 'Smart Checklist', 
    description: 'Let each trip be an inspirational Journey, each room a peaceful space',
    image: 'https://placehold.co/150x150/E0F2FE/0284C7?text=Step+2'
  },
  { 
    title: 'Efficient Booking System', 
    description: 'Let each trip be an inspirational Journey, each room a peaceful space',
    image: 'https://placehold.co/150x150/E0F2FE/0284C7?text=Step+3'
  },
  { 
    title: 'Save More', 
    description: 'Let each trip be an inspirational Journey, each room a peaceful space',
    image: 'https://placehold.co/150x150/E0F2FE/0284C7?text=Step+4'
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        Process on <span className="text-blue-600">How It Works</span>
      </h2>
      <p className="text-gray-600 mt-2 mb-12">Keep Calm & travel Well</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative p-2">
              <div className="absolute inset-0 border-4 border-blue-500 border-dashed rounded-full animate-spin-slow"></div>
              <div className="relative w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                <img src={step.image} alt={step.title} className="w-40 h-40 object-cover rounded-full" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;