import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import ListingItem from "../components/ListingItem";
import listings from "./../data";

const Rent = () => {
  const [location, setLocation] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilter = (e) => {
    e.preventDefault();
    const filteredListings = listings.filter((listing) => {
      if (
        location &&
        !listing.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      if (moveInDate && listing.when !== moveInDate) {
        return false;
      }

      if (propertyType && listing.propertyType !== propertyType) {
        return false;
      }

      if (priceRange) {
        const [min, max] = priceRange.split("-");
        if (listing.price <= min || listing.price >= max) {
          return false;
        }
      }
      return true;
    });
    setFilteredListings(filteredListings);
    setIsFiltered(true);
  };

  return (
    <div className="App w-full h-96 max-w-5xl justify-between mx-auto">
      {/* Heading and Search Input */}
      <div className="flex items-center justify-between my-4 py-2">
        <h1 className="text-3xl text-center font-bold">
          Search properties to rent
        </h1>
        <div className="relative">
          <input
            className="py-1 pl-2 pr-6 border border-gray-300 rounded outline-none"
            type="search"
            placeholder="Search with Search Bar"
          />
          <RiArrowDropDownLine className="absolute text-gray-500 bg-gray-200 right-2 top-2 text-xl cursor-pointer rounded-full" />
        </div>
      </div>

      {/* Filtering Divs */}
      <form
        onSubmit={handleFilter}
        className="flex items-center justify-center bg-white  mb-7 px-6 py-6 rounded space-x-5"
      >
        <label className="text-gray-500 w-full border-r-2">
          Location
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className=" block w-full font-semibold text-black outline-none"
          />
        </label>
        <label className="text-gray-500 w-full border-r-2 pr-1">
          When
          <input
            type="date"
            placeholder="Select"
            value={moveInDate}
            onChange={(e) => setMoveInDate(e.target.value)}
            className="block w-full font-semibold text-black outline-none pr-2"
          />
        </label>
        <label className="text-gray-500 w-full border-r-2 pr-2">
          Price
          <select
            className="w-full block font-semibold text-black outline-none pr-2"
            id="price-filter"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select price range</option>
            <option value="8000-10000">₹8,000 - ₹10,000</option>
            <option value="10000-12000">₹10,000 - ₹12,000</option>
            <option value="12000-15000">₹12,000 - ₹15,000</option>
            <option value="15000-18000">₹15,000 - ₹18,000</option>
            <option value="18000-20000">₹18,000 - ₹20,000</option>
          </select>
        </label>
        <label className="text-gray-500 w-full border-r-2 pr-2">
          Property Type
          <select
            className="w-full block font-semibold text-black outline-none"
            id="price-filter"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="Houses">Houses</option>
            <option value="Apartments">Apartments</option>
            <option value="Duplex">Duplex</option>
            <option value="Studio">Studio</option>
            <option value="Loft">Loft</option>
            <option value="Condominium">Condominium</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={handleFilter}
          className="bg-indigo-600 text-white font-semibold py-3 px-7 mt-1 rounded"
        >
          Search Here
        </button>
      </form>

      {/* Listings */}
      <main>
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {isFiltered &&
            filteredListings.map((listing) => (
              <ListingItem key={listing.id} listing={listing} />
            ))}
          {!isFiltered &&
            listings.map((listing) => (
              <ListingItem key={listing.id} listing={listing} />
            ))}
        </ul>
      </main>
    </div>
  );
};

export default Rent;
