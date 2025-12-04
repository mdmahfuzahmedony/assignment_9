import React from "react";
import { NavLink } from "react-router"; // react-router-dom ব্যবহার করা ভালো
import { FaStar, FaRegStar } from "react-icons/fa";

const SingleToy = ({ toy }) => {
  const { toyName, price, rating, pictureURL, toyId, availableQuantity } = toy;

  // রেটিং স্টার জেনারেট করার ফাংশন (অপশনাল, সুন্দর দেখানোর জন্য)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="h-full">
      <div className="group bg-gray-200 border border-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full overflow-hidden relative">
        
        {/* Image Section */}
        <figure className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Badge (Optional - Stock Status) */}
          <div className="absolute top-3 right-3 bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {availableQuantity > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </figure>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          
          {/* Title */}
          <h2 className="text-xl font-bold text-purple-900 mb-2 truncate group-hover:text-purple-700 transition-colors">
            {toyName}
          </h2>

          {/* Rating & Quantity Row */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1 text-sm">
              {renderStars(Math.round(rating))}
              <span className="text-gray-500 font-semibold ml-1">({rating})</span>
            </div>
            <div className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-md">
              Qty: {availableQuantity}
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto mb-4">
            <p className="text-gray-500 text-sm">Price</p>
            <p className="text-2xl font-black text-purple-800">
              ${price}
            </p>
          </div>

          {/* Button */}
          <NavLink
            to={`/toys/${toyId}`}
            className="w-full block text-center bg-yellow-400 text-purple-900 font-bold py-3 rounded-xl shadow-md hover:bg-purple-700 hover:text-yellow-400 transition-all duration-300"
          >
            See More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;