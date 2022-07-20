import { openCreatePostModal, openLoginModal } from "../../features/indexSlice";
import "./sidebarMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { CreatePostModal } from "../modals/CreatePostModal";
import { useToast, Button, Box, Text } from "@chakra-ui/react";
import { SideBarCategories } from "./SideBarCategories";
import { AiOutlineComment } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const SidebarMenu = () => {
  const toast = useToast();
  const navigate = useNavigate();

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
  };

  const openLoginScreen = () => {
    dispatch(openLoginModal());
  };

  const allDiscusion = () => {
    navigate("/all-discusion");
  }
  const myFavorite = () => {
    navigate("/my-favorite");
  }
  return (
    <section className='sidebar-menu pe-3'>
      {user ? (
        <>
          {" "}
          <Button
            bg='#0b87ff'
            w={"100%"}
            size={"md"}
            my={5}
            p={3}
            _hover={{ bg: "#0b87ff" }}
            disabled={user === null}
            onClick={handleCreatePost}
          >
            <Text fontSize={"lg"}>Create Post</Text>
          </Button>
          {user && (
            <div className='menu1'>
              <Button bg={"none"} onClick={allDiscusion}>
                <AiOutlineComment color='#0b87ff' size={20} />
                <Text ml={2}>All Discussions</Text>
              </Button>
              <Button bg={"none"} mt={3} mb={5} onClick={myFavorite}>
                <BsFillStarFill color='#0b87ff' size={20} />
                <Text ml={2}>My Favorites</Text>
              </Button>
            </div>
          )}
          <hr />
          <Box>
            <SideBarCategories />
          </Box>
        </>
      ) : (
        <Box border={"1px"} w='100%' p={2} borderColor='#e5e5e5' mt={"150px"}>
          <Text fontSize={"lg"}>You must be logged in to create a post</Text>
          <Button display={'flex'} mx={'auto'} mt={2} bg='#0b87ff' w={'50%'} onClick={openLoginScreen}>
            Login
          </Button>
        </Box>
      )}
      <CreatePostModal />
    </section>
  );
};
