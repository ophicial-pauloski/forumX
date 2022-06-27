import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  createNewPost,
  getPosts,
  likePost,
} from "../../features/post/postService";
import { PostInterface } from "../../interfaces/post";


const initialState: PostInterface = {
  post: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//create post
export const createPost: any = createAsyncThunk(
  "post/create",
  async (post: any, thunkAPI) => {
    try {
      // get token auth state from redux store
      const { auth } = thunkAPI.getState() as any;

      return await createNewPost(post, auth.user.token);
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

//get all post
export const getAllPost: any = createAsyncThunk(
  "post/getAllPost",
  async (posts: any) => {
    try {
      return await getPosts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return message;
    }
  }
);

//like post
export const likedAndDislikePost: any = createAsyncThunk(
  "post/like",
  async (postid: string, thunkAPI) => {
    try {
      // get token auth state from redux store
      const { auth } = thunkAPI.getState() as any;
      return await likePost(postid, auth.user.token);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      // return message;
      console.log(message);
    }
  }
);

export const postSlice: any = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state: PostInterface) => {
      return initialState;
    },
  },
  extraReducers: {
    [createPost.pending]: (state: PostInterface) => {
      state.isLoading = true;
    },
    [createPost.fulfilled]: (
      state: PostInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
      state.post = action.payload;
    },
    [createPost.rejected]: (
      state: PostInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [getAllPost.pending]: (state: PostInterface) => {
      state.isLoading = true;
    },
    [getAllPost.fulfilled]: (
      state: PostInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.post = action.payload;
    },
    [getAllPost.rejected]: (
      state: PostInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [likedAndDislikePost.pending]: (state: PostInterface) => {
      state.isLoading = true;
    },
    [likedAndDislikePost.fulfilled]: (
      state: PostInterface,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    },
    [likedAndDislikePost.rejected]: (state: PostInterface, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

export const { reset, like } = postSlice.actions;
export const selectAuth = (state: RootState) => state.post;
export default postSlice.reducer;
