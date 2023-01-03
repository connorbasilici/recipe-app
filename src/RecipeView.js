import React from "react";

function RecipeView({ recipe, deleteRecipe }) {

    return (
        <tr>
            <td name="name">{recipe.name}</td>
            <td name="cuisine">{recipe.cuisine}</td>
            <td name="photo">
                <img alt="Finished product" src={recipe.photo} />
            </td>
            <td name="ingredients" className="content_td">
                <p>{recipe.ingredients}</p>
            </td>
            <td name="preparation" className="content_td">
                <p>{recipe.preparation}</p>
            </td>
            <td>
                <button name="delete" type="submit" onClick={deleteRecipe}>
                    Delete 
                </button>
            </td>
        </tr>
     );
}

export default RecipeView;