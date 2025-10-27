// src/components/PropertyList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // IMPORTANT: Make sure your backend (http://localhost:5000) is running!
        const response = await axios.get('https://bookme-api-abdallahgmal.vercel.app/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        // Fallback to dummy data if API fails
        setProperties(dummyProperties);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            The Most <span className="text-blue-600">Memorable</span> Rest Time <span className="text-blue-600">Status</span> Here
          </h2>
          <p className="text-gray-600 mt-2">Our target is to provide you with a best quality service</p>
        </div>
        <Link to="/discover" className="px-6 py-3 rounded-lg bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100">
          Discover Here
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* We'll show the first 4 properties. Use .slice(0, 4) */}
        {properties.slice(0, 4).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

// Dummy data in case your API isn't running yet
const dummyProperties = [
  { id: 1, title: 'Pearl Continental Hotel', location: { city: 'Karachi' }, price_per_night: 200, rating: 4.5, guests: 2, beds: 2, baths: 4, imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Pearl Continental Hotel', location: { city: 'Karachi' }, price_per_night: 200, rating: 4.5, guests: 2, beds: 2, baths: 4, imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Pearl Continental Hotel', location: { city: 'Karachi' }, price_per_night: 200, rating: 4.5, guests: 2, beds: 2, baths: 4, imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Pearl Continental Hotel', location: { city: 'Karachi' }, price_per_night: 200, rating: 4.5, guests: 2, beds: 2, baths: 4, imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80' },
];

export default PropertyList;