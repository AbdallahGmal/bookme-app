// src/components/Stats.jsx
import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Images */}
        <div className="relative h-80">
          <img 
            src="https://images.unsplash.com/photo-1541018840-a386b7fO4-E?auto=format&fit=crop&w=500&q=80" 
            alt="Boats"
            className="absolute top-0 left-0 w-2/3 h-full object-cover rounded-3xl shadow-2xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1517336966144-48e0c8b6e2dC?auto=format&fit=crop&w=400&q=80" 
            alt="Boats 2"
            className="absolute bottom-0 right-0 w-1/2 h-2/3 object-cover rounded-3xl shadow-2xl border-8 border-gray-50"
          />
        </div>
        
        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Best Of the <span className="text-blue-600">Week</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-8">
            Let's spend your money and relieve your stress by getting around the island of bali
          </p>
          <div className="flex space-x-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500 font-medium">Destinations</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600">200+</h3>
              <p className="text-gray-500 font-medium">Tourists</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-500 font-medium">Hotels</p>
            </div>
          </div>
          <button className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stats;