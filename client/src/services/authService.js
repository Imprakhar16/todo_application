import { axiosInstance } from "../features/helper/axiosInterceptors";
import { API_PATHS } from "./apiEndpoints";

export const login = async (body) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, body);
    localStorage.setItem("authToken", response.data.token);
    return response;
  } catch (error) {
    console.log(error.data.message);
  }
};
