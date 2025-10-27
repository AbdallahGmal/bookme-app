// src/components/Facilities.jsx
import React from 'react';
import { FaWifi, FaHome, FaCar, FaSwimmer, FaDumbbell, FaUtensils, FaBolt, FaEllipsisH } from 'react-icons/fa';

const facilitiesData = [
  { icon: <FaWifi />, name: 'WIFI Available' },
  { icon: <FaHome />, name: 'Private Space' },
  { icon: <FaCar />, name: 'Parking Area' },
  { icon: <FaSwimmer />, name: 'Swimming Pool' },
  { icon: <FaDumbbell />, name: 'Fitness Gym' },
  { icon: <FaUtensils />, name: 'Breakfast' },
  { icon: <FaBolt />, name: '24/7 Light' },
  { icon: <FaEllipsisH />, name: 'Others' },
];

const Facilities = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Best <span className="text-blue-600">Facilities</span> Provide You.
          </h2>
          <p className="text-gray-600">
            Accommodations are designed to provide utmost comfort and relaxation.
            We ensure a memorable stay for our guests.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Contact Now
          </button>
        </div>

        {/* Right: Grid of Facilities */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {facilitiesData.map((facility, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center h-40 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-blue-600 text-4xl mb-3">{facility.icon}</div>
              <p className="font-semibold text-gray-700">{facility.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;