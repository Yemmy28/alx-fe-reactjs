import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipe data on component mount
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
