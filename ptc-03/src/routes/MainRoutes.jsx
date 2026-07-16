import React from "react";
import { Route, Routes } from "react-router";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipes from "../pages/CreateRecipes";
import Home from "../pages/Home";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/detail/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-recipe" element={<CreateRecipes />} />
      </Routes>
    </>
  );
};

export default MainRoutes;