import React from "react";
import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // ...

    <nav className="flex items-center justify-between flex-wrap sticky bg-gray-900 p-6 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <ImBooks className="h-8 w-8" />
        <span className="font-semibold text-2xl tracking-tight ml-2">
          Bookify
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow">
          <NavLink
            exact
            to="/add"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            activeClassName="text-white"
          >
            Add Book
          </NavLink>
          <NavLink
            exact
            to="/books"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            activeClassName="text-white"
          >
            Book
          </NavLink>
          <NavLink
            exact
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            activeClassName="text-white"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
