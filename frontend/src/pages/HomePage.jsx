// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Offers from '../components/Offers';
import PropertyList from '../components/PropertyList';
import Facilities from '../components/Facilities';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Suggestions from '../components/Suggestions';
import Stats from '../components/Stats';
import History from '../components/History';
import Benefits from '../components/Benefits';


const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero and Search Bar Section */}
      <div className="relative bg-gray-50 overflow-hidden">
        <Hero />
        {/* We place the search bar at the bottom, overlapping the hero section */}
        <div className="relative -mt-16 z-10 container mx-auto px-4">
          <SearchBar />
        </div>
      </div>

      {/* Offers Section */}
      <Offers />

      {/* Most Memorable (Property List) Section */}
      <PropertyList />

      {/* Best of the Week (Stats) Section */}
      <Stats />

      {/* Discover Our History Section */}
      <History />
      
      {/* Suggestions Section */}
      <Suggestions />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Facilities Section */}
      <Facilities />

      {/* Benefits Section */}
      <Benefits />

      {/* Testimonials Section */}
      <Testimonials />

    </div>
  );
};

export default HomePage;