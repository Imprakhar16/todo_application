import { showToast } from "../components/toaster";
import { axiosInstance } from "../features/helper/axiosInterceptors";
import { API_PATHS } from "./apiEndpoints";

export const login = async (body) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, body);
    localStorage.setItem("authToken", response.data.loggedinUser.token);
    showToast({
      message: "Logged in successfully ",
      status: "success",
    });
    return response.data;
  } catch (error) {
    showToast({
      message: error.response?.data?.message || "Login Failed",
      status: "error",
    });

    throw error.response?.data || error;
  }
};

export const register = async (body) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, body);
    localStorage.setItem("verfyToken", response.data.otpToken);
    showToast({
      message: "Registration successful! Please verify your email",
      status: "success",
    });
    return response.data;
  } catch (error) {
    showToast({
      message:
        error.response?.data?.message || "Registration Failed..! Try again",
      status: "error",
    });
    throw error.response?.data || error;
  }
};

export const verifyMail = async (otp, otpToken) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.VERIFY_USER, {
      otp,
      otpToken,
    });
    showToast({
      message: "Email verified successfully",
      status: "success",
    });
    return response.data;
  } catch (error) {
    showToast({
      message: error.response?.data?.message || "Verification Failed",
      status: "error",
    });
    throw error.response?.data || error;
  }
};
