// src/components/Testimonials.jsx
import React from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    name: 'Katende Phillip',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl mauris, nec tempus eget magna eget nibh morbi. Suspendisse potenti.',
    image: 'https://placehold.co/80x80/E2E8F0/333?text=K.P'
  },
  {
    name: 'Katende Phillip',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec tempus eget magna eget nibh morbi. Suspendisse potenti. In id augue ut augue est pellentesque.',
    image: 'https://placehold.co/80x80/E2E8F0/333?text=K.P'
  },
  {
    name: 'Katende Phillip',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl mauris, nec tempus eget magna eget nibh morbi. Suspendisse potenti.',
    image: 'https://placehold.co/80x80/E2E8F0/333?text=K.P'
  },
];

const Testimonials = () => {
  // This is a static layout. To make it a slider, you'd use a state variable 
  // and buttons to change the 'active' testimonial.
  const activeIndex = 1; // We'll just feature the middle one

  return (
    <div className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Clients Say About Us
        </h2>
        
        <div className="relative w-full max-w-4xl mx-auto h-80">
          {/* Slider Controls */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-blue-600">
            <FaChevronLeft />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-400 hover:text-blue-600">
            <FaChevronRight />
          </button>

          {/* Testimonial Cards */}
          <div className="flex items-center justify-center">
            {/* We'll just show the middle card as "active" */}
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  absolute transition-all duration-500 ease-in-out
                  ${index === activeIndex ? 'z-10 scale-100 opacity-100' : 'z-0 scale-90 opacity-40'}
                  ${index === activeIndex - 1 ? '-translate-x-3/4' : ''}
                  ${index === activeIndex + 1 ? 'translate-x-3/4' : ''}
                `}
              >
                <TestimonialCard testimonial={testimonial} active={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, active }) => {
  return (
    <div className={`relative w-96 p-8 rounded-3xl ${active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} shadow-xl`}>
      {/* Background shape */}
      {active && (
        <div className="absolute -top-4 -left-4 w-full h-full border-4 border-blue-200 rounded-3xl -z-10 transform rotate-6"></div>
      )}
      <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-md" />
      <h3 className="font-bold text-lg">{testimonial.name}</h3>
      <FaQuoteLeft className={`mx-auto my-4 ${active ? 'text-blue-200' : 'text-gray-300'} text-3xl`} />
      <p className="text-sm">{testimonial.quote}</p>
    </div>
  );
};

export default Testimonials;