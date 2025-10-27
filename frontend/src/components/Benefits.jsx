// src/components/Benefits.jsx
import React from 'react';

const benefitsData = [
  {
    title: 'Prime Location',
    description: 'Our hotel is situated in the heart of the city, surrounded by popular tourist attractions, shopping centers, and restaurants.',
    color: 'blue'
  },
  {
    title: 'Exceptional Service',
    description: 'Our staff is dedicated to providing the best service to our guests, ensuring they have a memorable and enjoyable stay.',
    color: 'green'
  },
  {
    title: 'Delicious Dining',
    description: 'Our hotel features an on-site restaurant that serves delicious meals prepared by our experienced chefs.',
    color: 'red'
  },
];

const Benefits = () => {
  // Color mapping for Tailwind CSS
  const colors = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700' },
    green: { bg: 'bg-green-100', text: 'text-green-700' },
    red: { bg: 'bg-red-100', text: 'text-red-700' },
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div>
          <img 
            src="https://placehold.co/600x600/E0F2FE/0284C7?text=Travel+Illustration" // Placeholder for your illustration
            alt="Travel Benefits"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-2">Benefits</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why The Opus Luxury Residences?
          </h2>
          <hr className="w-16 border-t-4 border-blue-600 mb-8" />
          
          <div className="space-y-6">
            {benefitsData.map((item) => (
              <div key={item.title}>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${colors[item.color].bg} ${colors[item.color].text}`}>
                  {item.title}
                </span>
                <p className="text-gray-600 mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;