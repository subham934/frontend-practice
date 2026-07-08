import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-x-10 text-sm">
      <NavLink
        to="/"
        className={(e) => (e.isActive ? "text-red-300" : "text-white")}
      >
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-red-300" : "text-white")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-red-300" : "text-white")}
      >
        About
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          `px-3 py-4 bg-gray-900 rounded-2xl ${
            isActive ? "text-red-300" : "text-white"
          }`
        }
      >
        Create Recipe
      </NavLink>
    </nav>
  );
};

export default Navbar;
