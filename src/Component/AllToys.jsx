import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import { FaSearch, FaSortAmountDown, FaFilter, FaBoxOpen } from 'react-icons/fa';

const AllToys = ({ toy = [] }) => { // Default value empty array
  
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
      document.title = "All Toys | ToyStore";
  }, []);

  // Filter and Sort Logic
  const filteredToys = toy
    .filter((item) => 
      item.toyName.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      } else if (sortOrder === "highToLow") {
        return b.price - a.price;
      } else {
        return 0; // Default (No sort)
      }
    });

  return ( 
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-[1600px] mx-auto px-4">
        
        {/* Main Layout: Flex for Desktop, Stack for Mobile */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDEBAR (Search, Sort, Count) */}
          <div className="w-full lg:w-1/5 space-y-6 h-fit lg:sticky lg:top-24">
            
            {/* Search Box */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <h3 className="text-lg font-bold text-purple-900 flex items-center gap-2 mb-4">
                <FaSearch className="text-yellow-400" /> Search Toys
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type toy name..." 
                  className="input input-bordered w-full pl-10 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 rounded-xl"
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Filter & Sort Box */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-purple-900 flex items-center gap-2">
                  <FaFilter className="text-yellow-400" /> Filter
                </h3>
                {/* Length / Count Display */}
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">
                  {filteredToys.length} Items
                </span>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold text-gray-600">Sort by Price</span>
                </label>
                <div className="relative">
                  <select 
                    className="select select-bordered w-full focus:outline-none focus:border-yellow-400 rounded-xl pl-10"
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                  <FaSortAmountDown className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Banner / Ad (Optional Decoration) */}
            <div className="bg-purple-900 rounded-2xl p-6 text-center text-white shadow-xl hidden lg:block">
              <h3 className="text-xl font-bold mb-2">Summer Sale!</h3>
              <p className="text-sm text-gray-300 mb-4">Get 50% off on all action figures.</p>
              <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto flex items-center justify-center text-purple-900 font-bold">
                50%
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (Product Grid) */}
          <div className="w-full lg:w-4/5">
            
            {/* Header for Grid (Mobile only or decorative) */}
            <div className="mb-6 flex justify-between items-center">
               <h2 className="text-2xl font-bold text-purple-900">
                 All Toys Collection
               </h2>
               {/* Mobile Count View */}
               <span className="lg:hidden text-gray-500 font-medium">{filteredToys.length} results found</span>
            </div>

            {/* The Grid */}
            {filteredToys.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredToys.map((singletoy) => (
                  <SingleToy key={singletoy.toyId} toy={singletoy} />
                ))}
              </div>
            ) : (
              // Empty State Design
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center bg-white rounded-2xl shadow-sm border border-dashed border-gray-300 p-10">
                <FaBoxOpen className="text-6xl text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-600">No toys found!</h3>
                <p className="text-gray-400 mt-2">Try searching with a different name.</p>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default AllToys;