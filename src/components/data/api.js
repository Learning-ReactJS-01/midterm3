import axios from "axios";

const USERS_URL = 'https://api.github.com/users/';
const SEARCH_URL = 'https://api.github.com/search/users?q=';

export const getUser = async (username) => {
  try {
    const response = await axios.get(`${USERS_URL}${username}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`${USERS_URL}${username}/repos`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching repos data:", error.message);
  }
};

export const getSearchUsers = async (text) => {
  try {
    const response = await axios.get(`${SEARCH_URL}${text}`);
    const data = response.data.items;
    return data;
  } catch (error) {
    console.error("Error fetching search user data:", error);
  }
};
