import "./postCard.css";
import { BsChatSquareFill } from "react-icons/bs";
import { FaSortUp } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { PostModal } from "../modals/PostModal";
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
import { Link, useNavigate } from "react-router-dom";
import { PostMenu } from './PostMenu';
import moment from 'moment';


export const PostCard = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { post, isSuccess, isError, isLoading, message } = useAppSelector(
    (state: any) => state.post
  );
    

  useEffect(() => {
    dispatch(getAllPost());
    return () => {
      dispatch(reset());
    }
  }, [isError, message, dispatch]);

  //like post
  const handlelikePost = (id: string) => {
    dispatch(likedAndDislikePost(id));
    console.log(id);
  };

  const openComment = (id: string) => {
    navigate(`/post/${id}`);
  }

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
                    <Text fontSize={"0.73rem"}>{post.likes.length}</Text>
                  </Center>
                </Box>
                <Box w='100%'>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent='space-between'
                  >
                    <Link to={`/post/${post._id}`}>
                      <Text fontWeight={"bold"}>
                        {post.title.length > 100
                          ? post.title.substring(0, 100) + "..."
                          : post.title}
                      </Text>
                    </Link>
                    <PostMenu userPostId={post.user} postId={post._id} />
                  </Box>
                  <Link to={`/post/${post._id}`}>
                    <Text cursor={"pointer"} color='#4b587c'>
                      {post.description.length > 100
                        ? post.description.substring(0, 100) + "..."
                        : post.description}
                    </Text>
                  </Link>
                  <Box display={"flex"} alignItems={"center"} mt={2}>
                    <Box>
                      <Link to=''>Pauloski</Link> in
                      <Link to='' color={"#0b87ff"}>
                        Technology
                      </Link>
                    </Box>
                    <Box
                      cursor={"pointer"}
                      display={"flex"}
                      alignItems={"center"}
                      ml={5}
                      mr={5}
                      onClick={() => openComment(post._id)}
                    >
                      <BsChatSquareFill color='#0b87ff' />{" "}
                      <Text ml={1}>{post.comments.length}</Text>
                    </Box>
                    <span>
                      <BsDot />
                    </span>
                    <span>{moment(post.createdAt).fromNow()}</span>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Text>Something went wrong!</Text>
      )}
      <PostModal />
    </>
  );
};
