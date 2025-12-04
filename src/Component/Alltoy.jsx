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

  useEffect(() => {
    setFilteredToys(toyP);
  }, [toyP]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = toyP.filter(
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


      <div className="mt-10">
        {filteredToys.length > 0 ? (
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
