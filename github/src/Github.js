const GITHUB_API_BASE_URL='https://api.github.com';

export const fetchRepositories = async (query) => {
    const response = await fetch(`${GITHUB_API_BASE_URL}/search/repositories?q=${query}`);
    const data = await response.json();
    return data.items;
  };
  
  export const fetchUserProfile = async (username) => {
    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}`);
    const data = await response.json();
    return data;
  };
  