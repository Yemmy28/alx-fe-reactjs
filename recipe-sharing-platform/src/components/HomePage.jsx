import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';
import { Link } from 'react-router-dom';

function HomePage({ recipes }) {
    return (

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-lg">
            {/* Link to RecipeDetail page */}
            <Link to={`/recipe/${recipe.id}`}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold mt-4">{recipe.title}</h2>
            </Link>
            <p className="mt-2 text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    );
    (recipesData) 
    
  }
  
  export default HomePage;
  