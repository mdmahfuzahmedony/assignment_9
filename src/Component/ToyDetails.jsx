import React, { useState } from "react";
import { useParams } from "react-router";
import useToyproduct from "../Hook/useToyProduct";

const ToyDetails = () => {
  const { toyP, loading } = useToyproduct();
  const { id } = useParams();
  const [userRating, setUserRating] = useState(0); // ⭐ user rating state

  if (loading) {
    return <h1>Loading......</h1>;
  }

  const singleToy = toyP.find((toyItem) => String(toyItem.toyId) === id);

  if (!singleToy) {
    return <h1 className="text-center text-red-600 mt-10">Toy not found 😢</h1>;
  }

  const {
    toyName,
    sellerName,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
  } = singleToy;

  // ⭐ rating click handler
  const handleRating = (value) => {
    setUserRating(value);
    console.log(`You rated ${toyName} with ${value} stars`);
    // future: here you can update Firebase or backend
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 justify-center items-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-[500px] h-[500px] object-cover rounded-lg shadow"
          />
        </div>

        <div className="flex-1 p-4">
          <h1 className="text-[30px] font-bold text-white">{toyName}</h1>

          <p className="mt-2 text-white font-semibold">
            Quantity: <span className="text-blue-500">{availableQuantity}</span>
          </p>

          <p className="mt-4 text-white font-semibold">
            Price: <span className="text-blue-500">{price}</span>
          </p>

          <p className="mt-4 text-white font-semibold">
            Current Rating: <span className="text-blue-500">{rating}</span>
          </p>

          <p className="mt-4 text-white font-semibold">
            Seller: <span className="text-blue-500">{sellerName}</span>
          </p>

          <p className="mt-4 text-gray-300">{description}</p>

          {/* ⭐ Rating system start */}
          <div className="mt-5">
            <h3 className="text-white font-semibold">Rate this toy:</h3>
            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer text-2xl transition-all ${
                    star <= userRating ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mt-2 text-white">
              Your Rating:{" "}
              <span className="text-blue-400">
                {userRating > 0 ? userRating : "Not rated yet"}
              </span>
            </p>
          </div>


          <div className="flex justify-start mt-6">
            
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-[1300px] mx-auto">
        <h1 className="text-[25px] font-bold text-white">Description</h1>
        <p className="mt-5 text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
