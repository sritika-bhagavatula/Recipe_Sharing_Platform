import { useState } from "react";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleFileChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Recipe:", recipe);
    alert("Recipe Added Successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input type="text" className="form-control" name="name" value={recipe.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea className="form-control" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input type="text" className="form-control" name="price" value={recipe.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
