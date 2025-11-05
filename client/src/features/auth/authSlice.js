import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk, verifyUserThunk } from "./authThunk";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  success: false,
  registrationData: null,
  otpToken: null,
  isOtpSent: false,
  isVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.success = false;
      state.registrationData = null;
      state.otpToken = null;
      state.isOtpSent = false;
      state.isVerified = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.user = action.payload?.loggedinUser || null;
        state.token = action.payload?.loggedinUser?.token || null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || "Login failed";
      })

      // 🔹 REGISTER
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.isOtpSent = false;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.registrationData = action.payload?.userDetails || null;
        state.otpToken = action.payload?.otpToken || null;
        state.isOtpSent = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.isOtpSent = false;
        state.error = action.payload || "Registration failed";
      })

      // 🔹 VERIFY EMAIL OTP
      .addCase(verifyUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isVerified = false;
      })
      .addCase(verifyUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.isVerified = true;
        state.error = null;
        // Optionally store user/token if API returns it
        if (action.payload?.user) {
          state.user = action.payload.user;
        }
        if (action.payload?.token) {
          state.token = action.payload.token;
        }
      })
      .addCase(verifyUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.isVerified = false;
        state.error = action.payload || "Verification failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
