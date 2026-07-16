import React, { createContext, useState } from "react";

export const RecipeContextProvider = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <div>
      <RecipeContextProvider.Provider value={{ data, setData }}>
        {children}
      </RecipeContextProvider.Provider>
    </div>
  );
};

export default RecipeContext;

