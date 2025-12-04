import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-[1600px] bg-gray-800 mx-auto py-16 px-4 bg-base-200">
      
      {/* 1. Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-purple-600 font-bold tracking-wide uppercase mb-2">About Us</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-6">
          Bringing Joy & Creativity <br /> To Every Child
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          We believe play is the best form of learning. Our mission is to provide safe, educational, and fun toys that inspire the next generation of thinkers and dreamers.
        </p>
      </div>

      {/* 2. Story Section (Image + Text) */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80" 
              alt="Happy kids playing" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Optional Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-purple-600">10+</p>
              <p className="text-xs text-gray-200 font-semibold uppercase">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-gray-200 mb-4">
            Our Story & Mission
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Started in 2013, <strong>Toy World</strong> began with a simple idea: toys should be more than just plastic. They should be tools for imagination. 
            <br /><br />
            We carefully curate our collection from the best manufacturers around the world. Whether it is an educational puzzle, a fast RC car, or a soft teddy bear, we ensure every product meets the highest safety standards.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-green-100 text-green-600 p-2 rounded-full">✓</span>
              <span className="font-semibold text-gray-200">100% Safe Materials</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-full">✓</span>
              <span className="font-semibold text-gray-200">Educational Value</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-full">✓</span>
              <span className="font-semibold text-gray-200">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-pink-100 text-pink-600 p-2 rounded-full">✓</span>
              <span className="font-semibold text-gray-200">Premium Quality</span>
            </div>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      {/* 3. Stats Section (Why Choose Us) */}
      <div className="bg-gray-50 rounded-3xl p-10 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* Stat 1 */}
          <div className="p-4">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">5k+</h4>
            <p className="text-gray-600 font-medium">Happy Kids</p>
          </div>

          {/* Stat 2 */}
          <div className="p-4">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">500+</h4>
            <p className="text-gray-600 font-medium">Premium Toys</p>
          </div>

          {/* Stat 3 */}
          <div className="p-4">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">24/7</h4>
            <p className="text-gray-600 font-medium">Support</p>
          </div>

          {/* Stat 4 */}
          <div className="p-4">
            <h4 className="text-4xl font-bold text-purple-600 mb-2">50+</h4>
            <p className="text-gray-600 font-medium">Award Winning</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;