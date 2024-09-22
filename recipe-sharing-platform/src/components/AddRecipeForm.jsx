import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.title) validationErrors.title = "Title is required.";
    if (!formData.ingredients || formData.ingredients.split(",").length < 2) {
      validationErrors.ingredients = "At least two ingredients are required.";
    }
    if (!formData.steps) validationErrors.steps = "Preparation steps are required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle form submission (e.g., sending to backend)
    console.log("Form data submitted:", formData);

    // Clear form fields after submission
    setFormData({ title: "", ingredients: "", steps: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Recipe Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients (comma-separated)
        </label>
        <textarea
          name="ingredients"
          id="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
          Preparation Steps
        </label>
        <textarea
          name="steps"
          id="steps"
          value={formData.steps}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
