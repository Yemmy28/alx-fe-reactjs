import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUserData([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUserData(data.items); // API returns users in the `items` array
    } catch (err) {
      setError("Looks like we can't find any users with the specified criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="number"
          placeholder="Minimum repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="input p-2 border border-gray-300 rounded w-full"
        />
        <button type="submit" className="button p-2 bg-blue-500 text-white rounded w-full">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div className="user-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {userData && userData.map((user) => (
          <div key={user.id} className="user-card p-4 border border-gray-300 rounded shadow hover:shadow-lg">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-lg font-bold">{user.login}</h2>
            {user.location && <p>Location: {user.location}</p>}
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
