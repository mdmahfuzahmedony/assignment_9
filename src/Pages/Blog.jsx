import React, { useState } from 'react';

const ToyBlogSection = () => {
  // 1. Blog Data (Toy Related Articles/News)
  const blogData = [
    {
      id: 1,
      title: 'Top 5 Educational Toys for Toddlers',
      category: 'Parenting Tips',
      date: 'Oct 15, 2023',
      description: 'Discover how educational toys can help your child learn faster. We have picked the best ones for brain development.',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 2,
      title: 'How to Clean and Maintain Lego Sets',
      category: 'Maintenance',
      date: 'Oct 20, 2023',
      description: 'Legos can get dirty over time. Here is a step-by-step guide on how to wash them safely without losing pieces.',
      image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 3,
      title: 'Action Figures: A Collector’s Guide',
      category: 'Reviews',
      date: 'Oct 25, 2023',
      description: 'Starting a collection? Here is everything you need to know about collecting superhero action figures in 2023.',
      image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 4,
      title: 'Why Wooden Toys are Making a Comeback',
      category: 'Trends',
      date: 'Nov 02, 2023',
      description: 'Plastic toys are everywhere, but wooden toys are eco-friendly and durable. See why parents are choosing them again.',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 5,
      title: 'Safety Tips Before Buying Toys',
      category: 'Parenting Tips',
      date: 'Nov 05, 2023',
      description: 'Safety first! Learn about choking hazards and material safety standards before buying a new toy for your baby.',
      image: 'https://images.unsplash.com/photo-1555445054-d166d126038e?auto=format&fit=crop&w=600&q=60'
    },
    {
      id: 6,
      title: 'Best RC Cars for Outdoor Fun',
      category: 'Reviews',
      date: 'Nov 10, 2023',
      description: 'Reviewing the fastest and most rugged Remote Control cars for racing in the park or backyard.',
      image: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=60'
    },
  ];

  // 2. State
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Categories
  const categories = ['All', ...new Set(blogData.map((blog) => blog.category))];

  // 4. Filter Logic
  const filteredBlogs = blogData.filter((blog) => {
    const categoryMatch = selectedCategory === 'All' || blog.category === selectedCategory;
    const searchMatch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="max-w-[1600px] mx-auto py-12 px-4 bg-base-100">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Toy World Blog</h1>
        <p className="text-gray-500">Latest news, reviews, and parenting tips about toys.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar: Categories */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content: Search & Blog List */}
        <div className="w-full lg:w-3/4">
          
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search blog titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-gray-700 bg-white shadow-sm"
            />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
                  
                  {/* Blog Thumbnail */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded font-semibold">
                        {blog.category}
                      </span>
                      <span>{blog.date}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-3 leading-snug hover:text-purple-600 cursor-pointer">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {blog.description}
                    </p>

                    <button className="text-purple-600 font-semibold text-sm hover:underline self-start">
                      Read More &rarr;
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-lg text-gray-400">No blog posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToyBlogSection;