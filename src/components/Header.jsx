import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="flex items-center justify-between h-20 w-full border-b-2 bg-white">
      <div className="flex items-center sm:justify-between md:justify-between lg:space-x-8 lg:ml-10">
        {/* Logo, Name */}
        <Link to="/">
          <div className="flex lg:space-x-2 justify-center items-center w-28 h-10">
            <FaEnvelopeOpen className="text-indigo-500" />
            <h1 className="text-lg text-indigo-900 font-bold">Estatery</h1>
          </div>
        </Link>

        {/* Options */}
        <div className="flex font-medium items-center text-gray-700 space-x-8">
          <Link to="/rent">
            <p
              className={`${
                pathMatchRoute("/rent") &&
                "bg-violet-200 text-indigo-500 px-2 py-1 rounded"
              }`}
            >
              Rent
            </p>
          </Link>
          <Link to="/buy">
            <p
              className={`${
                pathMatchRoute("/buy") &&
                "bg-violet-200 text-indigo-500 px-2 py-1 rounded"
              }`}
            >
              Buy
            </p>
          </Link>
          <Link to="/sell">
            <p
              className={`${
                pathMatchRoute("/sell") &&
                "bg-violet-200 text-indigo-500 px-2 py-1 rounded"
              }`}
            >
              Sell
            </p>
          </Link>
          <Link to="/manage-property">
            <p
              className={`${
                pathMatchRoute("/manage-property") &&
                "bg-violet-200 text-indigo-500 px-2 py-1 rounded"
              }`}
            >
              Manage Property ˅
            </p>
          </Link>
          <Link to="/resources">
            <p
              className={`${
                pathMatchRoute("/resources") &&
                "bg-violet-200 text-indigo-500 px-2 py-1 rounded"
              }`}
            >
              Resources ˅
            </p>
          </Link>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 pr-10">
        <button className="text-indigo-600 font-medium border border-indigo-600 rounded-md px-3 py-1">
          Login
        </button>
        <button className="text-white bg-indigo-600 font-medium rounded-md px-3 py-1">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
