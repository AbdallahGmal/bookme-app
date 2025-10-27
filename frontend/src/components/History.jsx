// src/components/History.jsx
import React from 'react';

const History = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative p-4">
          {/* Decorative Dotted Outline */}
          <div className="absolute inset-0 border-2 border-blue-200 border-dashed rounded-[50px] transform -rotate-6"></div>
          <img 
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80" 
            alt="Modern Building"
            className="w-full h-auto object-cover rounded-[40px] shadow-2xl relative"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            Discover Our <span className="text-blue-600">History</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-8 leading-relaxed">
            Welcome to our hotel, where history comes alive and blends seamlessly with modern luxury. As you step through our doors, you are transported to a bygone era, where elegance and charm prevail. Each corner of our hotel tells a story, with every detail carefully curated to reflect our rich heritage. From the grand chandeliers ....
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;