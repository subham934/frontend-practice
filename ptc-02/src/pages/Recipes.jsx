import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap justify-center  gap-5 mt-15">
      {data.length === 0 ? <p>No Recipes Found</p> : renderrecipes}
    </div>
  );
};

export default Recipes;