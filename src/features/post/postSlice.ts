import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  createNewPost,
  getPosts,
  likePost,
  getPostById,
  deletePost,
} from "../../features/post/postService";
import { PostInterface } from "../../interfaces/post";

const initialState: PostInterface = {
  post: [],
  postById: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//create post
export const createPost: any = createAsyncThunk(
  "post/create",
  async (post: PostInterface, thunkAPI) => {
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
  async (_, thunkAPI) => {
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

//delete post
export const isDeletingPost: any = createAsyncThunk(
  "post/delete",
  async (post: string, thunkAPI) => {
    try {
      // get token auth state from redux store
      const { auth } = thunkAPI.getState() as any;
      return await deletePost(post, auth.user.token as string);
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
      return await likePost(postid, auth.user._id, auth.user.token);
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

//fetch post by id
export const fetchPostById: any = createAsyncThunk(
  "post/getpostbyid",
  async (postid: string) => {
    try {
      return await getPostById(postid);
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

//post slice
export const postSlice: any = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state: PostInterface) => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
    .addCase(createPost.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.post.push(action.payload);
    });
    builder.addCase(createPost.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getAllPost.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(getAllPost.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.post = action.payload;
    });
    builder.addCase(getAllPost.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(likedAndDislikePost.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(likedAndDislikePost.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(likedAndDislikePost.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(fetchPostById.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.postById = action.payload;
    });
    builder.addCase(fetchPostById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(isDeletingPost.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(isDeletingPost.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.post = state.post.filter((post: any) => post._id !== action.payload);
    });
    builder.addCase(isDeletingPost.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

  },
});

export const { reset, like } = postSlice.actions;
export const selectAuth = (state: RootState) => state.post;
export default postSlice.reducer;
