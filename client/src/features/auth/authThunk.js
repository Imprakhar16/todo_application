import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await login(body);
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message || "Login Failed"
      );
    }
  }
);
