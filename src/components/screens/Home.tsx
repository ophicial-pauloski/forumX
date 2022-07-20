import { MainTop } from '../mainContainer/MainTop';
import {  Routes, Route } from "react-router-dom";
import { PostCard } from '../mainContainer/PostCard';
import { PostDetails } from './PostDetails';
import { AllDiscussion } from './AllDiscussion';
import { MyFavorite } from './MyFavorite';

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
      <Route path='/all-discusion' element={<AllDiscussion />} />
      <Route path='/my-favorite' element={<MyFavorite />} />
    </Routes>
  );
}
