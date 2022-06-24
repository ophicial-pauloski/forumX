import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {AuthInterface} from "../../interfaces/auth";
import {registerUser, loginUser, logoutUser} from "../../features/auth/authService";




//get user from local storage
const user = JSON.parse(localStorage.getItem("user") || "null");

const initialState: AuthInterface = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//register user
export const register: any = createAsyncThunk(
  "auth/register",
  async (user: any, thunkAPI) => {
    try {
      return await registerUser(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//login user
export const login: any = createAsyncThunk(
  "auth/login",
  async (user: any, thunkAPI) => {
    try {
      return await loginUser(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// logout user
export const logout: any = createAsyncThunk("auth/logout", async () => {
  return logoutUser();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: AuthInterface) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    //register user
    [register.pending]: (state: AuthInterface) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (
      state: AuthInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
      state.user = action.payload;
    },
    [register.rejected]: (
      state: AuthInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.pending]: (state: AuthInterface) => {
      state.isLoading = true;
    },
    //login user
    [login.pending]: (state: AuthInterface) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state: AuthInterface, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state: AuthInterface, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    //logout user
    [logout.pending]: (state: AuthInterface) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state: AuthInterface) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = null;
    },
  },
});

export const { reset } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
