import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./authThunk";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.user = action.payload?.data?.user || null;
        state.token = action.payload?.data?.token || null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
