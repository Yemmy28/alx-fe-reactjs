import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component p-6">
      <form onSubmit={handleSearch} className="flex flex-col items-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border p-2 mb-4 rounded w-80"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="mt-6">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-xl font-bold">{userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
