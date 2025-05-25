import axios from "axios";

// API function to authenticate user
export const authenticateUser = async (username: string, password: string) => {
  try {
    const response = await axios.post("http://auth-api-url/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);

    throw new Error("An error occurred during login");
  }
};
