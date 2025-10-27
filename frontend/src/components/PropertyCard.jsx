// src/components/PropertyCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaBed, FaBath, FaUserFriends } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  // Use dummy data if API data is incomplete
  const {
    id,
    title,
    location,
    price_per_night,
    rating = 4.5,
    guests = 2,
    beds = 2,
    baths = 4,
    imageUrl = 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80'
  } = property;
  
  const city = location?.city || 'Unknown City'; // Handle nested location object

  return (
    <Link to={`/property/${id}`} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-56 object-cover" 
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center">
          <FaStar className="text-yellow-400 mr-1" /> {rating}
        </div>
      </div>
      <div className="p-4">
        <p className="text-blue-600 text-sm font-semibold">{city}</p>
        <h3 className="text-lg font-bold text-gray-800 truncate mt-1">{title}</h3>
        <p className="text-gray-600 font-bold mt-2">
          ${price_per_night} <span className="font-normal text-sm">/ Per Night</span>
        </p>
        <div className="flex items-center space-x-4 text-gray-500 text-sm mt-4 border-t pt-3">
          <span className="flex items-center"><FaUserFriends className="mr-1" /> {guests}</span>
          <span className="flex items-center"><FaBed className="mr-1" /> {beds}</span>
          <span className="flex items-center"><FaBath className="mr-1" /> {baths}</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;