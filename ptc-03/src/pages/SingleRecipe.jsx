import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext);
  const navigate = useNavigate();
  const params = useParams();
  
  const recipe = data.find((recipe) => recipe.id == params.id);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if this recipe is in Favorites
  useEffect(() => {
    if (recipe) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setIsFavorite(favorites.some((fav) => fav.id == recipe.id));
    }
  }, [recipe, params.id]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      chef: recipe?.chef,
      description: recipe?.description,
      ingredients: Array.isArray(recipe?.ingredients) ? recipe.ingredients.join("\n") : recipe?.ingredients,
      instructions: Array.isArray(recipe?.instructions) ? recipe.instructions.join("\n") : recipe?.instructions,
      category: recipe?.category,
    },
  });

  // Keep form values in sync when recipe loads
  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        image: recipe.image,
        chef: recipe.chef,
        description: recipe.description,
        ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients.join("\n") : recipe.ingredients,
        instructions: Array.isArray(recipe.instructions) ? recipe.instructions.join("\n") : recipe.instructions,
        category: recipe.category,
      });
    }
  }, [recipe, reset]);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-400 font-medium">Loading recipe details...</p>
      </div>
    );
  }

  // Favorite toggling handler
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;
    
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id != recipe.id);
      toast.success("Removed from Favorites");
    } else {
      updatedFavorites = [...favorites, recipe];
      toast.success("Added to Favorites!");
    }
    
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const UpdateHandler = (formData) => {
    const index = data.findIndex((r) => r.id == params.id);
    if (index === -1) return;

    // Convert text area newline inputs into arrays
    const formattedRecipe = {
      ...recipe,
      ...formData,
      ingredients: typeof formData.ingredients === "string" 
        ? formData.ingredients.split("\n").map(i => i.trim()).filter(Boolean) 
        : formData.ingredients,
      instructions: typeof formData.instructions === "string" 
        ? formData.instructions.split("\n").map(i => i.trim()).filter(Boolean) 
        : formData.instructions,
    };

    const copydata = [...data];
    copydata[index] = formattedRecipe;
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));

    // Also update recipe details in Favorites if present
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favIndex = favorites.findIndex((fav) => fav.id == params.id);
    if (favIndex !== -1) {
      favorites[favIndex] = formattedRecipe;
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    toast.success("Recipe Updated Successfully");
    navigate("/recipes");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));

    // Also delete from Favorites list if present
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const filteredFavs = favorites.filter((fav) => fav.id != params.id);
    localStorage.setItem("favorites", JSON.stringify(filteredFavs));

    toast.success("Recipe Deleted Successfully");
    navigate("/recipes");
  };

  // Helper arrays for details presentation
  const ingredientsList = Array.isArray(recipe.ingredients) 
    ? recipe.ingredients 
    : typeof recipe.ingredients === "string" 
      ? recipe.ingredients.split("\n").map(i => i.trim()).filter(Boolean) 
      : [];

  const instructionsList = Array.isArray(recipe.instructions) 
    ? recipe.instructions 
    : typeof recipe.instructions === "string" 
      ? recipe.instructions.split("\n").map(i => i.trim()).filter(Boolean) 
      : [];

  const categoryThemes = {
    breakfast: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    lunch: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    snack: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    dinner: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  };
  const badgeTheme = categoryThemes[recipe.category?.toLowerCase()] || "bg-slate-500/10 text-slate-400 border-slate-500/20";

  return (
    <div className="py-6 max-w-6xl mx-auto px-4">
      {/* Navigation & Toolbar */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/recipes" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Recipes
        </Link>

        {/* Favorite Icon Action Button */}
        <button
          onClick={toggleFavorite}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm transition-all duration-300 cursor-pointer ${
            isFavorite
              ? "bg-rose-500/10 text-rose-500 border-rose-500/30 shadow-rose-500/5"
              : "bg-slate-800/40 text-slate-400 border-slate-700/60 hover:text-rose-500 hover:border-rose-500/20"
          }`}
        >
          <svg className={`w-4.5 h-4.5 transition-transform duration-300 ${isFavorite ? "scale-110 fill-rose-500" : "fill-none"}`} stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          {isFavorite ? "Favorited" : "Add Favorite"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Recipe Details Card */}
        <div className="lg:col-span-7 bg-slate-800/30 border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-xl">
          {/* Image */}
          <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-2xl mb-6 bg-slate-800">
            <img
              src={recipe.image || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <span className={`absolute top-4 right-4 z-10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full border backdrop-blur-md ${badgeTheme}`}>
              {recipe.category}
            </span>
          </div>

          {/* Details header */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 mb-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Chef {recipe.chef || "Guest"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              {recipe.title}
            </h1>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {recipe.description}
            </p>
          </div>

          <div className="border-t border-slate-700/60 my-6" />

          {/* Ingredients Grid */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Ingredients Required
            </h2>
            {ingredientsList.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {ingredientsList.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-1 flex-shrink-0 w-3 h-3 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-[8px] text-amber-500">✓</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-500">No ingredients specified.</p>
            )}
          </div>

          <div className="border-t border-slate-700/60 my-6" />

          {/* Instructions List */}
          <div>
            <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 12.408l9-9m-9 0l9 9" />
              </svg>
              Step-by-Step Directions
            </h2>
            {instructionsList.length > 0 ? (
              <ol className="flex flex-col gap-4">
                {instructionsList.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-xs text-slate-500">No instructions specified.</p>
            )}
          </div>
        </div>

        {/* Right Side: Manage & Edit Form Card */}
        <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 md:p-8 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 tracking-tight">Edit Recipe Details</h2>
          
          <form onSubmit={handleSubmit(UpdateHandler)} className="flex flex-col gap-5">
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recipe Title</label>
              <input
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm"
                {...register("title")}
                type="text"
                placeholder="e.g. Classic Lasagna"
                required
              />
            </div>

            {/* Chef Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Chef Name</label>
              <input
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm"
                {...register("chef")}
                type="text"
                placeholder="e.g. Chef Sanjeev"
                required
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Image URL</label>
              <input
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm"
                {...register("image")}
                type="url"
                placeholder="https://example.com/food.jpg"
                required
              />
            </div>

            {/* Category Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Meal Category</label>
              <select
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm appearance-none cursor-pointer"
                {...register("category")}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snack">Snack</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Description</label>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm min-h-[90px] resize-none"
                {...register("description")}
                placeholder="Write a brief overview of the recipe..."
                required
              />
            </div>

            {/* Ingredients */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ingredients</label>
                <span className="text-[10px] text-slate-500 font-medium lowercase">one item per line</span>
              </div>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm min-h-[110px] resize-none"
                {...register("ingredients")}
                placeholder="Pasta&#10;Tomato sauce&#10;Cheese"
                required
              />
            </div>

            {/* Instructions */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Instructions</label>
                <span className="text-[10px] text-slate-500 font-medium lowercase">one step per line</span>
              </div>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm min-h-[110px] resize-none"
                {...register("instructions")}
                placeholder="Boil pasta in salted water.&#10;Sauté ingredients and mix.&#10;Serve with cheese toppings."
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-sm transition duration-200 cursor-pointer shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
              >
                Update Recipe
              </button>
              <button
                onClick={deleteHandler}
                className="w-full py-3 rounded-xl border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10 text-red-400 font-semibold text-sm transition duration-200 cursor-pointer"
              >
                Delete Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
