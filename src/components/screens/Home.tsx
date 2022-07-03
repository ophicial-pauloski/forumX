import { MainTop } from '../mainContainer/MainTop';
import {  Routes, Route } from "react-router-dom";
import { PostCard } from '../mainContainer/PostCard';
import { PostDetails } from './PostDetails';

export const Home = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <MainTop />
            <PostCard />
          </>
        }
      />
      <Route path='/post/:id' element={<PostDetails />} />
    </Routes>
  );
}
