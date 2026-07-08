import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);

    // const copyData = [...data];
    // copyData.push(recipe);
    // setData(copyData);

    setData([...data, recipe]);

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="flex flex-col gap-y-2"
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
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>

        <button className="px-4 py-2 rounded-xl bg-blue-400 text-white block cursor-pointer">
          Create Recipe
        </button>
      </form>
    </>
  );
};

export default Create;
