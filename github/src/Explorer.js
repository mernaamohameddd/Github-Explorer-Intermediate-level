import React, { useState, useEffect } from 'react';
import { fetchRepositories, fetchUserProfile } from './Github';

const Explorer = () => {
  const [query, setQuery] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      return; // Don't search if query is empty
    }
    setLoading(true);
    setError(null);
    try {
      const repos = await fetchRepositories(query.trim());
      setRepositories(repos);
    } catch (err) {
      setError('Error fetching repositories');
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="githubexplorer">
  <div className="githubexplorer-content">
    <h1>GitHub Explorer</h1>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for repositories"
    />
    <button onClick={handleSearch}>Search</button>

    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <strong>{repo.full_name}</strong> - {repo.description}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>
  );
};

export default Explorer;