import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    title,
    description,
    ingredients,
    instructions,
    userId,
    image,
    chef,
    category,
  } = recipe;
  return (
    <Link to={`/recipes/details/${id}`} className="block w-[23vw] hover:scale-105 transition-all ease-in duration-300 shadow-xl p-1 overflow-hidden rounded-[30px]">
        <img src={image} alt={title} className="w-full h-[40vh] object-cover" />
        <h1 className="font-black mt-2 px-2">{title}</h1>
        <h5 className="px-2 text-amber-400">{chef}</h5>
        <p className="px-2 pb-3">{description.slice(0,100)}... <small className="text-blue-400">more</small></p>
    </Link>
  );
};

export default RecipeCard;

