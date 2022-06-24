import { Button } from "react-bootstrap";
import { openCreatePostModal } from "../../features/indexSlice";
import "./sidebarMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { CreatePostModal } from '../modals/CreatePostModal';
import { useToast } from '@chakra-ui/react';


export const SidebarMenu = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const handleCreatePost = () => {
    user && dispatch(openCreatePostModal());
    !user &&
      toast({
        title: "Error",
        position: "top-left",
        description: "You must be logged in to create a post",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
  }
  return (
    <section className='sidebar-menu'>
      <Button className='my-5 p-3' onClick={handleCreatePost}>Start A New Conversion</Button>
      <div className='menu1'>
        <span>
          <i className='fas fa-comments'></i>
          All Discussions
        </span>
        <span>
          <i className='fas fa-star'></i>
          Starred
        </span>
      </div>
      <hr />
      <div className='menu-items'>
        <ul>
          <li>
            <div></div>
            <span>GENERAL</span>
          </li>
          <li>
            <div></div>
            <span>NEWS</span>
          </li>
          <li>
            <div></div>
            <span>ALGORITHMS</span>
          </li>
          <li>
            <div></div>
            <span>ORGANISITION</span>
          </li>
          <li>
            <div></div>
            <span>PROJECT</span>
          </li>
        </ul>
      </div>
      <CreatePostModal />
    </section>
  );
};
