// src/pages/PropertyDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaMapMarkerAlt, FaBed, FaBath, FaUserFriends, FaWifi, FaCar } from 'react-icons/fa';

const PropertyDetailPage = () => {
  const { id } = useParams(); // Gets the ':id' from the URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/properties/${id}`);
        setProperty(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('Failed to load property details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]); // Re-run this effect if the ID in the URL changes

  if (loading) {
    return <div className="text-center py-40">Loading details...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">{error}</div>;
  }

  if (!property) {
    return <div className="text-center py-40">Property not found.</div>;
  }

  // Fallback for image
  const imageUrl = property.imageUrl || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header: Title, Rating, Location */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{property.title}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">{property.rating || 4.5} ({property.reviews?.length || 0} reviews)</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            <span>{property.location.city}, {property.location.country}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery (Simplified) */}
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
        <img src={imageUrl} alt={property.title} className="w-full h-full object-cover" />
      </div>

      {/* Main Content: Details + Booking Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <div className="pb-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-800">Hosted by {property.host.full_name}</h2>
            <div className="flex items-center space-x-4 text-gray-500 mt-2">
              <span className="flex items-center"><FaUserFriends className="mr-1" /> {property.guests || 2} guests</span>
              <span>•</span>
              <span className="flex items-center"><FaBed className="mr-1" /> {property.beds || 2} beds</span>
              <span>•</span>
              <span className="flex items-center"><FaBath className="mr-1" /> {property.baths || 4} baths</span>
            </div>
          </div>

          <div className="py-6 border-b">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>
          
          <div className="py-6 border-b">
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 gap-4">
              <span className="flex items-center text-gray-700"><FaWifi className="mr-3 text-xl" /> WIFI Available</span>
              <span className="flex items-center text-gray-700"><FaCar className="mr-3 text-xl" /> Parking Area</span>
              {/* Add more amenities from your data */}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="py-6">
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>
            {property.reviews && property.reviews.length > 0 ? (
              property.reviews.map(review => (
                <div key={review.id} className="border-b pb-4 mb-4">
                  <p className="font-semibold">{review.user.full_name}</p>
                  <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 p-6 bg-white shadow-2xl rounded-2xl border">
            <p className="text-2xl font-bold text-gray-800">
              ${property.price_per_night} <span className="text-lg font-normal text-gray-600">/ night</span>
            </p>
            
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in</label>
                  <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out</label>
                  <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
              >
                Book Now
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              You won't be charged yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;