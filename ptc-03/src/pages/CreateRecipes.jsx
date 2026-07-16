import { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipes = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    // const copyData = [...data];
    // copyData.push(recipe);
    // setData(copyData);

    setData([...data, recipe]);
    toast.success("New Recipe Created!")
    reset();
    navigate("/recipes")
  };
  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
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

        <button className="block mt-5 bg-gray-800 px-4 py-2 rounded cursor-pointer text-white font-medium ">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
