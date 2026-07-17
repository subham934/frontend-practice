import { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();
  
  const SubmitHandler = (recipe) => {
    // Generate unique ID
    recipe.id = nanoid();

    // Format newlines into structured arrays
    recipe.ingredients = typeof recipe.ingredients === "string" 
      ? recipe.ingredients.split("\n").map(i => i.trim()).filter(Boolean) 
      : [];
    recipe.instructions = typeof recipe.instructions === "string" 
      ? recipe.instructions.split("\n").map(i => i.trim()).filter(Boolean) 
      : [];

    const copyData = [...data];
    copyData.push(recipe);
    setdata(copyData);

    localStorage.setItem("recipe", JSON.stringify(copyData));

    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="py-6 max-w-4xl mx-auto px-4">
      {/* Header Toolbar */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/recipes" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-amber-500 transition-colors duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Recipes
        </Link>
        <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Recipe Builder</span>
      </div>

      {/* Main Form Card */}
      <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Create New Recipe</h1>
          <p className="mt-2 text-sm text-slate-400">
            Share your culinary masterpiece with the world. Fill out the details below.
          </p>
        </div>

        <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column Fields */}
            <div className="flex flex-col gap-5">
              {/* Recipe Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recipe Title</label>
                <input
                  className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm"
                  {...register("title")}
                  type="text"
                  placeholder="e.g. Classic Margherita Pizza"
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
                  placeholder="e.g. Chef Sanjeev Kapoor"
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
                  placeholder="https://images.unsplash.com/photo-..."
                  required
                />
              </div>

              {/* Category Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Meal Category</label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm cursor-pointer appearance-none"
                    {...register("category")}
                    defaultValue="lunch"
                  >
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="dinner">Dinner</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Fields */}
            <div className="flex flex-col gap-5">
              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Description</label>
                <textarea
                  className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm h-[94px] resize-none"
                  {...register("description")}
                  placeholder="Briefly describe the taste, culture, and context of your dish..."
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
                  className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm h-[110px] resize-none"
                  {...register("ingredients")}
                  placeholder="e.g.&#10;2 cups of flour&#10;1 tsp active yeast&#10;1/2 cup tomato puree"
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
                  className="w-full bg-slate-900/50 border border-slate-700/60 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition duration-200 text-sm h-[110px] resize-none"
                  {...register("instructions")}
                  placeholder="e.g.&#10;Preheat the oven to 450°F.&#10;Knead dough and let it rest.&#10;Spread pizza sauce and toppings."
                  required
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/60 my-2" />

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/recipes"
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition duration-200 text-sm font-semibold"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold text-sm transition duration-200 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 cursor-pointer"
            >
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipes;
