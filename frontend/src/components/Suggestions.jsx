// src/components/Suggestions.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const suggestionData = [
  { id: 1, city: 'Lahore', title: 'Avari Hotels are known for their renowned Properties', count: 302, img: 'https://images.unsplash.com/photo-1618221195710-dd6b41fa129b?auto=format&fit=crop&w=600&q=80' },
  { id: 2, city: 'Lahore', title: 'Avari Hotels are known for their renowned Properties', count: 302, img: 'https://images.unsplash.com/photo-1611095210271-47f1c1f73b64?auto=format&fit=crop&w=600&q=80' },
  { id: 3, city: 'Lahore', title: 'Avari Hotels are known for their renowned Properties', count: 302, img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80' },
  { id: 4, city: 'Lahore', title: 'Avari Hotels are known for their renowned Properties', count: 302, img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80' },
];

const SuggestionCard = ({ item }) => (
  <Link to={`/location/${item.city}`} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img 
      src={item.img} 
      alt={item.title}
      className="w-full h-56 object-cover" 
    />
    <div className="p-4">
      <p className="text-blue-600 text-sm font-semibold">{item.city}</p>
      <h3 className="text-lg font-bold text-gray-800 truncate mt-1 group-hover:text-blue-600">{item.title}</h3>
      <p className="text-gray-500 text-sm mt-2">{item.count} Properties</p>
    </div>
  </Link>
);

const Suggestions = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          <span className="text-blue-600">Suggestions</span> for discovery
        </h2>
        <p className="text-gray-600 mt-2 mb-8">Popular Places to recommend for you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suggestionData.map((item) => (
            <SuggestionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;