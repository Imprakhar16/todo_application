import { showToast } from "../components/toaster";
import { axiosInstance } from "../features/helper/axiosInterceptors";
import { API_PATHS } from "./apiEndpoints";

export const createTodo = async (body) => {
  try {
    const response = await axiosInstance.post(API_PATHS.TODO.CREATE, body);
    showToast({
      message: "Todo Created Successfully",
      status: "success",
    });
    return response.data;
  } catch (error) {
    showToast({
      message: error.response.data.message || "Failed to create Todo",
      status: "error",
    });
    throw error.response?.data || error;
  }
};

export const fetchAllTodos = async (body) => {
  try {
    const response = await axiosInstance.get(API_PATHS.TODO.TODOS_LIST, body);
    return response.data;
  } catch (error) {
    showToast({
      message: error.response.data.message || "Failed to get Todos",
      status: "error",
    });
    throw error.response.data || error;
  }
};
