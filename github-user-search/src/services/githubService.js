import axios from 'axios';

const API_URL = process.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;  // Return the user data from GitHub API
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;  // Throw the error to handle it in the calling component
    }
  };
// Function to search for GitHub users by username

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/search/users`, {
      params: {
        q: username,
      },
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_API_KEY}`, // Optional, if using an API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Function to get detailed information of a GitHub user
export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_API_KEY}`, // Optional, if using an API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
