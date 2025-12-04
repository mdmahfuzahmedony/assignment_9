import React, { useState } from "react";
import { useParams, Link } from "react-router";
import useToyproduct from "../Hook/useToyProduct";

const ToyDetails = () => {
  const { toyP, loading } = useToyproduct();
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  const singleToy = toyP.find((toyItem) => String(toyItem.toyId) === id);

  if (!singleToy) {
    return (
      <h1 className="text-center text-red-600 mt-10 text-2xl">
        Toy not found 😢
      </h1>
    );
  }

  // Destructuring with default values (in case fields are missing)
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
    warranty = "No Warranty", // Default text
    deliveryInfo = { cost: 0, time: "Unknown", location: "Unknown" }, // Default object
    reviews = [], // Default array
  } = singleToy;

  const relatedProducts = toyP
    .filter(
      (item) => item.subCategory === subCategory && String(item.toyId) !== id
    )
    .slice(0, 4);

  const handleIncrease = () => {
    if (quantity < availableQuantity) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleRating = (value) => {
    setUserRating(value);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/home">Home</a>/ {subCategory} /{" "}
          <span className="text-gray-800 font-semibold">{toyName}</span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Image */}
          <div className="lg:col-span-4 flex justify-center items-start">
            <img
              src={pictureURL}
              alt={toyName}
              className="w-full max-h-[400px] object-contain rounded-lg border border-gray-100"
            />
          </div>

          {/* Center: Info */}
          <div className="lg:col-span-5 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {toyName}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center text-yellow-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-gray-400 ml-1">({rating}/5)</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                Seller:{" "}
                <span className="text-blue-600 font-semibold cursor-pointer">
                  {sellerName}
                </span>
              </span>
            </div>

            <hr className="border-gray-100" />

            <div>
              <span className="text-3xl font-bold text-orange-600">
                ${price}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-400 line-through">
                  ${(price * 1.2).toFixed(2)}
                </span>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                  -20%
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="text-gray-600">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={handleDecrease}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-4 py-1 font-semibold">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500">
                Only {availableQuantity} items left
              </span>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded shadow transition">
                Buy Now
              </button>
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded shadow transition">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right: Dynamic Sidebar */}
          <div className="lg:col-span-3 bg-gray-50 p-4 rounded-lg text-sm space-y-4 h-fit border border-gray-200">
            {/* Dynamic Delivery Info */}
            <div>
              <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">
                Delivery
              </h3>
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-700">
                    {deliveryInfo.location}
                  </p>
                  <p className="text-xs text-gray-500">
                    Standard Delivery ({deliveryInfo.time})
                  </p>
                  <p className="font-bold text-gray-800 mt-1">
                    ${deliveryInfo.cost}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💵</span>
                <p className="text-gray-700">Cash on Delivery Available</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Dynamic Service Info */}
            <div>
              <h3 className="text-gray-500 text-xs font-bold uppercase mb-2">
                Service
              </h3>
              <div className="flex items-start gap-3 mb-2">
                <span className="text-xl">🛡️</span>
                <div>
                  <p className="font-semibold text-gray-700">7 Days Returns</p>
                  <p className="text-xs text-gray-500">
                    Change of mind is not applicable
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">🔧</span>
                <p className="text-gray-700">{warranty}</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-xs text-gray-500">
              <p>
                Sold by{" "}
                <span className="font-bold text-gray-700">{sellerName}</span>
              </p>
              <p className="mt-1">Email: {sellerEmail}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-9 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gray-100 p-2 rounded">
                Product Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Dynamic Reviews Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 bg-gray-100 p-2 rounded">
                Ratings & Reviews ({reviews.length})
              </h2>
              <div className="space-y-4">
                {/* Map through Reviews */}
                {reviews.length > 0 ? (
                  reviews.map((rev, index) => (
                    <div key={index} className="border-b pb-3 last:border-0">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                          {rev.user.charAt(0)}
                        </div>
                        <span className="font-semibold text-sm">
                          {rev.user}
                        </span>
                        <div className="flex text-yellow-500 text-xs">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < rev.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-1 ml-10">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No reviews yet. Be the first to review!
                  </p>
                )}

                {/* User Input Rating */}
                <div className="mt-8 pt-4 border-t">
                  <p className="font-bold text-sm mb-2">Write your review:</p>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`text-2xl ${
                          star <= userRating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <textarea
                    className="w-full border p-2 rounded text-sm focus:outline-blue-400"
                    placeholder="Write a comment..."
                  ></textarea>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600">
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">
                Related Products
              </h3>
              <div className="space-y-4">
                {relatedProducts.length > 0 ? (
                  relatedProducts.map((item) => (
                    <Link
                      to={`/toy/${item.toyId}`}
                      key={item.toyId}
                      className="flex gap-3 hover:bg-gray-50 p-2 rounded transition"
                    >
                      <img
                        src={item.pictureURL}
                        alt=""
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                          {item.toyName}
                        </h4>
                        <p className="text-orange-600 font-bold text-sm">
                          ${item.price}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No related products found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
