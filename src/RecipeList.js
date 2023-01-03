import React from "react";
import RecipeView from "./RecipeView";

function RecipeList( { recipes, deleteRecipe }) {
  
  return (
      recipes.map((recipe, index) => (
        <RecipeView
          deleteRecipe={() => deleteRecipe(index)}
          key={index}
          recipe={recipe}
          />
      ))
  );
}

export default RecipeList;
