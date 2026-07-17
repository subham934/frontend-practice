import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeThemeToDark,
  changeThemeToLight,
} from "../redux/slices/themeSlice";

const Navbar = () => {
  var theme = useSelector((state) => state.theme.value);
  var dispatch = useDispatch();
  return (
    <>
      <div
        className={`w-full h-20 flex items-center justify-around ${theme === "dark" ? "bg-blue-600 text-white" : "bg-amber-400 text-gray-700"
          }`}
      >
        <h1 className="text-gray-700 text-2xl font-black uppercase">Mongoose</h1>
        <h3 className="text-white text-xl font-medium uppercase">{theme}</h3>
        <div>
          <button
            className="px-5 py-2 rounded-2xl bg-white mx-5 text-black cursor-pointer"
            onClick={() => {
              dispatch(changeThemeToLight());
            }}
          >
            Light
          </button>
          <button
            className="px-5 py-2 rounded-2xl bg-white text-black cursor-pointer"
            onClick={() => {
              dispatch(changeThemeToDark());
            }}
          >
            Dark
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
