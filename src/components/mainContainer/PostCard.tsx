import "./postCard.css";
import { BsChatSquareFill } from "react-icons/bs";
import { FaSortUp } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { PostModal } from "../modals/PostModal";
import { openModal } from "../../features/indexSlice";
import {
  getAllPost,
  reset,
  likedAndDislikePost,
  fetchPostById,
} from "../../features/post/postSlice";
import { useEffect } from "react";
import { SpinnerLoader } from "../SpinnerLoader";
import { useToast, Box, Text, Heading, Center } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link } from "react-router-dom";


export const PostCard = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { post, isSuccess, isError, isLoading, message } = useAppSelector(
    (state: any) => state.post
  );


  const isFetchingPost = () => {
    dispatch(getAllPost());
  }
    

  useEffect(() => {
    isFetchingPost();
  }, [isSuccess, dispatch]);

  //open post modal
  const handleOpenPost = () => {
    // console.log(postid);
  };

  //like post
  const handlelikePost = (id: string) => {
    dispatch(likedAndDislikePost(id));
    console.log(id);
  };

  if (isLoading) {
    return (
      <Box mt={5}>
        <SpinnerLoader />
      </Box>
    );
  }

  return (
    <>
      {post.data?.length > 0 ? (
        <Box>
          <hr />
          {post.data.map((post: any) => {
            return (
              <Box
                key={post._id}
                border={"1px solid #e5e5e5"}
                p={3}
                mt={3}
                display={"flex"}
                alignItems={"center"}
                rounded={"sm"}
                onClick={() => handleOpenPost()}
              >
                <Box
                  ml={{ base: "0", md: "3", lg: "3", sm: "2", xs: "1" }}
                  p={2}
                  border={"1px solid #e5e5e5"}
                  rounded={"md"}
                  cursor='pointer'
                  mr={4}
                  onClick={() => handlelikePost(post._id)}
                >
                  <span>
                    <FaSortUp />
                  </span>
                  <Center>
                    <Text fontSize={"0.73rem"}>{post.likeCounts}</Text>
                  </Center>
                </Box>
                <Box>
                  <Link to={`/post/${post._id}`}>
                    <a>{post.title}</a>
                  </Link>
                  <Link to={`/post/${post._id}`}>
                    <Text cursor={"pointer"} color='#4b587c'>
                      {post.description.length > 100
                        ? post.description.substring(0, 100) + "..."
                        : post.description}
                    </Text>
                  </Link>
                  <Box display={"flex"} alignItems={"center"} mt={2}>
                    <Box>
                      <Link to ="">
                      Pauloski</Link> in
                      <Link to='' color={"#0b87ff"}>Technology</Link>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} ml={5} mr={5}>
                      <BsChatSquareFill color='#0b87ff' />{" "}
                      <Text ml={1}>150</Text>
                    </Box>
                    <span>
                      <BsDot />
                    </span>
                    <span>2d ago</span>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <div className='post_container'>
          <div className='post_card'>
            <div className='post_card_header'>
              <div className='post_card_header_title'>
                <h3>No Post Found</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <PostModal />
    </>
  );
};
