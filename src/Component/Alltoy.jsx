import React, { useEffect, useState } from "react";
import "../Component/Custom.css";
import AllToys from "./AllToys";
import useToyproduct from "../Hook/useToyProduct";

const AllToy = () => {
  useEffect(() => {
    document.title = "AllToys | ToyStore";
  }, []);

  const { toyP, loading } = useToyproduct();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  console.log(searchTerm);

  useEffect(() => {
    // Fix 1: toyP যদি undefined হয়, তাহলে empty array [] সেট হবে (Crash করবে না)
    setFilteredToys(toyP || []);
  }, [toyP]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // toyP যেন undefined না হয় সে জন্য 'toyP || []' ব্যবহার করা হয়েছে
    const filtered = (toyP || []).filter(
      (toy) => toy.toyName && toy.toyName.toLowerCase().includes(value)
    );
    setFilteredToys(filtered);
  };

  if (loading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-20 text-white">
        Loading...
      </h1>
    );
  }

  return (
    <div className="text-center px-4">
      <h1 className="text-[40px] font-bold text-white mt-10">Our All Toys</h1>
      <p className="text-[18px] font-light text-gray-400 mt-2">
        Explore all the Toy
      </p>

      {/* Fix 2: Search Input Field Added Here */}
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search toy by name..."
          className="p-2 rounded-md w-1/2 text-black"
          onChange={handleSearch}
        />
      </div>

      <div className="mt-10">
        {/* Fix 3: Added Optional Chaining (?) to prevent crash */}
        {filteredToys?.length > 0 ? (
          <AllToys toy={filteredToys}></AllToys>
        ) : (
          <h2 className="text-center text-red-400 font-semibold text-xl mt-10">
            No toys found matching
          </h2>
        )}
      </div>
    </div>
  );
};

export default AllToy;
