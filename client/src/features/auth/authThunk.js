import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, verifyMail } from "../../services/authService";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await login(body);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Login Failed"
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const response = await register(body);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Register Failed"
      );
    }
  }
);

export const verifyUserThunk = createAsyncThunk(
  "auth/verify-user",
  async ({ otp, otpToken }, { rejectWithValue }) => {
    try {
      const response = await verifyMail(otp, otpToken);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Verification Failed"
      );
    }
  }
);
