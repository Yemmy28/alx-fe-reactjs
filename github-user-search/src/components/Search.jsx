import React, { useState } from 'react';

function Search({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}

function SearchResults({ users }) {
    if (!users || users.length === 0) {
      return <p>No users found.</p>;
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-lg">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <p>{user.location || 'Location not available'}</p>
            <p>{user.public_repos} repositories</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  }
  
  export default SearchResults;
