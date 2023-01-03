import React from "react";

function RecipeCreate( { handleChange }) {
  return (
    <tr>
      <td>
        <input
          name="name"
          type="text" 
          required="required"
          placeholder="Name"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="cuisine"
          type="text" 
          required="required"
          placeholder="Cuisine"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="photo"
          type="text" 
          required="required"
          placeholder="Image URL"
          onChange={handleChange}
        />
      </td>
      <td>
        <textarea 
          name="ingredients"
          type="text"
          placeholder="Ingredients"
          onChange={handleChange}
        />
      </td>
      <td>
        <textarea 
          name="preparation"
          type="text"
          placeholder="Preparation"
          onChange={handleChange}
        />
      </td>
      <td>
        <button type="submit">Create</button>
      </td>
    </tr>
  );
}

export default RecipeCreate;
