import axios from "axios";

// const URL_AUTH = "http://localhost:4000/auth/";
const URL_AUTH = process.env.REACT_APP_API_KEY + "auth/";

// register user
export const registerUser = async (user: any) => {
  const response = await axios.post(URL_AUTH+"register", user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login user
export const loginUser = async (user: any) => {
  const response = await axios.post(URL_AUTH + "login", user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//logout user
export const logoutUser = (): void => {
  return localStorage.removeItem("user");
};
