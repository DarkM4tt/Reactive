import React from "react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsDiamond } from "react-icons/bs";
import { TbHeart } from "react-icons/tb";

const ListingItem = ({ listing }) => {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
      <img
        className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
        loading="lazy"
        src={listing.imgURL}
        alt=""
      />
      <p className="absolute top-40 -left-1 bg-indigo-600 text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg">
        <b>:+</b> POPULAR
      </p>
      <div className="w-full p-[10px]">
        <p className="mt-2 text-gray-500">
          <span className="text-indigo-600 font-bold text-lg">
            ₹{listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          /month
        </p>
        <p className="font-bold text-xl truncate">
          {listing.name}{" "}
          <TbHeart className="cursor-pointer inline text-indigo-600 ml-40 w-7 h-7 border border-gray-400 rounded-full py-1" />
        </p>
        <div className="flex items-center space-x-1 border-b-2">
          <p className="font-semibold text-sm my-2 text-gray-500 truncate">
            {listing.location}
          </p>
        </div>
        <div className="flex items-center mt-[10px] justify-between">
          <div className="flex items-center space-x-1">
            <p className="text-sm">
              <FaBed className="inline mb-1 mr-1 text-indigo-600" />
              {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-sm">
              <FaBath className="inline mb-1 mr-1 text-indigo-600" />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : "1 Bathroom"}
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <BsDiamond className="inline text-indigo-600" />
            <p className="text-sm">{listing.area}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListingItem;
