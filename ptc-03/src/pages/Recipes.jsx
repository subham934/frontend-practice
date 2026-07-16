import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderRecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.length === 0 ? <h1>No Recipe Found</h1> : renderRecipe}
      </div>
    </div>
  );
};

export default Recipes;

