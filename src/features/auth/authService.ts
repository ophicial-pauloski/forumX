import axios from "axios";

const URL_AUTH = "auth/";

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
