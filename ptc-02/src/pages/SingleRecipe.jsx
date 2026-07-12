import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipeContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {

  };

  const { id } = useParams();

  const recipe = data.find((recipe) => id == recipe.id);
  console.log(recipe);
  return recipe ? (
    <div className="w-full flex mt-10">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black mb-5">{recipe.title}</h1>
        <img
          className="h-[40vh] w-[23vw] rounded-2xl"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>

      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-1/2 border p-2 gap-y-2"
      >
        <input
          type="url"
          className="block border-b outline-0 p-2 border-gray-500 focus:border-white"
          {...register("image")}
          placeholder="Recipe Image Link"
        />

        <input
          className="block border-b outline-0 p-2 border-gray-500 focus:border-white"
          {...register("chef")}
          placeholder="Chef's name"
        />

        <input
          className="border-b border-gray-500 outline-none focus:border-white p-2 block"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <textarea
          className="border-b border-gray-500 outline-none focus:border-white p-2 block"
          {...register("description")}
          placeholder="Recipe Description..."
        ></textarea>

        <textarea
          className="border-b border-gray-500 outline-none focus:border-white p-2 block"
          {...register("ingredients")}
          placeholder="Recipe Ingredients..."
        ></textarea>

        <textarea
          className="border-b border-gray-500 outline-none focus:border-white p-2 block"
          {...register("instructions")}
          placeholder="Recipe Instructions..."
        ></textarea>

        <select
          className="block border-b outline-0 p-2 bg-gray-700"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="px-4 py-2 rounded-xl bg-blue-400 text-white block cursor-pointer">
          Create Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
