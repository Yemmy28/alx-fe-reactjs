import React from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ margin: '20px 0', padding: '10px', width: '100%' }}
    />
  );
};

export default SearchBar;
