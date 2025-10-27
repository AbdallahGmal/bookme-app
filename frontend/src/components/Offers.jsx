// src/components/Offers.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg flex items-center space-x-6">
    <img 
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80" 
      alt="Offer"
      className="w-32 h-32 object-cover rounded-xl shadow-md"
    />
    <div>
      <h3 className="text-4xl font-bold text-blue-600">30% Off</h3>
      <p className="text-gray-600 mt-2 mb-4">This can be detailed description or just a short text</p>
      <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
        Book Now
      </button>
    </div>
  </div>
);

const Offers = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">Best offer this month</h2>
          <p className="text-gray-600 mt-2">This can be detailed description or just a short text</p>
        </div>
        <Link to="/offers" className="px-6 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100">
          View More
        </Link>
      </div>

      {/* For a real slider, use Swiper.js. This is a static grid. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <OfferCard />
        <OfferCard />
      </div>
      
      {/* Slider Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        <button className="w-3 h-3 rounded-full bg-blue-600"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        <button className="w-3 h-3 rounded-full bg-gray-300"></button>
      </div>
    </div>
  );
};

export default Offers;