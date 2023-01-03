import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  const initialRecipeFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [recipes, setRecipes] = useState(RecipeData);

  const [recipeFormData, setRecipeFormData] = useState({ ...initialRecipeFormState })

  const handleChange = ({ target }) => {
    const value = target.value;
    setRecipeFormData({
      ...recipeFormData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name: recipeFormData.name,
      cuisine: recipeFormData.cuisine,
      photo: recipeFormData.photo,
      ingredients: recipeFormData.ingredients,
      preparation: recipeFormData.preparation,
    }; 

    console.log("Submitted:", recipeFormData);
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    setRecipeFormData({ ...initialRecipeFormState });
    event.target.reset();
  };

  const deleteRecipe = (indexToDelete) =>
  setRecipes((currentRecipes) =>
    currentRecipes.filter((recipe, index) => index !== indexToDelete)
  );

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <form name="create" onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th name="name">Name</th>
              <th name="cuisine">Cuisine</th>
              <th name="photo">Photo</th>
              <th name="ingredients">Ingredients</th>
              <th name="preparation">Preparation</th>
              <th name="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
              <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
              <RecipeCreate handleChange={handleChange} />
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
