import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full py-2 bg-neutral-800/70 px-5 flex items-center justify-between ">
      <NavLink to="/" className="uppercase text-3xl text-white font-black">
        Lexus
      </NavLink>

      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/form"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          Form
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/course"
          className={({ isActive }) =>
            `px-3 py-1 rounded-2xl ${isActive ? "text-red-500 bg-red-300/20" : "text-white"}`
          }
        >
          Course
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
