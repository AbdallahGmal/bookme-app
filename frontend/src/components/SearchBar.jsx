// src/components/SearchBar.jsx
import React from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt, FaUserFriends, FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
      {/* Location */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-blue-600 text-xl" />
        <div>
          <label htmlFor="location" className="text-sm font-semibold text-gray-500">Location</label>
          <select id="location" className="w-full font-bold text-gray-800 bg-transparent focus:outline-none">
            <option>Karachi, Pakistan</option>
            <option>Lahore, Pakistan</option>
            <option>Islamabad, Pakistan</option>
          </select>
        </div>
      </div>

      {/* Check In */}
      <div className="flex items-center space-x-2">
        <FaRegCalendarAlt className="text-blue-600 text-xl" />
        <div>
          <label htmlFor="checkin" className="text-sm font-semibold text-gray-500">Check In</label>
          <input type="text" id="checkin" defaultValue="29 Mar 2024" className="w-full font-bold text-gray-800 bg-transparent focus:outline-none" />
        </div>
      </div>

      {/* Check Out */}
      <div className="flex items-center space-x-2">
        <FaRegCalendarAlt className="text-blue-600 text-xl" />
        <div>
          <label htmlFor="checkout" className="text-sm font-semibold text-gray-500">Check Out</label>
          <input type="text" id="checkout" defaultValue="18 Mar 2024" className="w-full font-bold text-gray-800 bg-transparent focus:outline-none" />
        </div>
      </div>

      {/* Room & Guests */}
      <div className="flex items-center space-x-2">
        <FaUserFriends className="text-blue-600 text-xl" />
        <div>
          <label htmlFor="guests" className="text-sm font-semibold text-gray-500">Room & Guests</label>
          <select id="guests" className="w-full font-bold text-gray-800 bg-transparent focus:outline-none">
            <option>1 Room, 5 Guests</option>
            <option>2 Rooms, 4 Guests</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button className="col-span-1 md:col-span-1 bg-blue-600 text-white rounded-lg h-14 w-full md:w-14 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700">
        <FaSearch />
        <span className="md:hidden ml-2">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;