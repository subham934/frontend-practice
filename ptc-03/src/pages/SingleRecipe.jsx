import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => recipe.id == params.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      category: recipe.category,
    },
  });
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => recipe.id == params.id);
    // console.log(index)
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    // console.log(copydata[index])
    setdata(copydata);
    toast.success("Recipe Updated Successfully");
    navigate("/recipes");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("Recipe Deleted Successfully");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black mb-3">{recipe.title}</h1>
        <img
          className="w-3/4 rounded-2xl  h-96"
          src={recipe.image}
          alt={recipe.title}
        />
      </div>

      <form onSubmit={handleSubmit(SubmitHandler)} className="w-1/2 p-2 ">
        <input
          className="border-b outline-0 p-2 block"
          {...register("image")}
          type="url"
          placeholder="Enter Image URL"
        />
        <small className="text-red-400">This is how the error is shown</small>

        <input
          className="border-b outline-0 p-2 block"
          {...register("title")}
          type="text"
          placeholder="Enter Title"
        />
        <input
          className="border-b outline-0 p-2 block"
          {...register("chef")}
          type="text"
          placeholder="Chef's Name"
        />

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("description")}
          placeholder="Enter Description"
        ></textarea>

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("ingredients")}
          placeholder="Enter Ingredients"
        ></textarea>

        <textarea
          className="border-b outline-0 p-2 block"
          {...register("instructions")}
          placeholder="Recipe Instruction"
        ></textarea>

        <select
          className="border-b bg-gray-500 outline-0 p-2 block"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="block mt-5 bg-blue-500 px-4 py-2 rounded cursor-pointer text-white font-medium ">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="block mt-5 bg-red-400 px-4 py-2 rounded cursor-pointer text-white font-medium "
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
