import { configureStore} from '@reduxjs/toolkit'
import  globalSlice  from '../features/indexSlice';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/post/postSlice';

const store = configureStore({
  reducer: {
    indexSlice: globalSlice,
    auth: authReducer,
    post: postReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store