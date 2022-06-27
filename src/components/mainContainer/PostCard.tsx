import "./postCard.css";
import { BsChatSquareFill } from "react-icons/bs";
import { FaSortUp } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { PostModal } from "../modals/PostModal";
// import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/indexSlice";
import {
  getAllPost,
  reset,
  likedAndDislikePost,
} from "../../features/post/postSlice";
import { useEffect } from "react";
import { SpinnerLoader } from "../SpinnerLoader";
import { useToast, Box, Text, Heading, Link, Center } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';


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
    dispatch(openModal());
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
                  <Heading cursor={"pointer"} as='h1' size='md'>
                    {post.title}
                  </Heading>
                  <Text cursor={"pointer"} color='#4b587c'>
                    {post.description.length > 100
                      ? post.description.substring(0, 100) + "..."
                      : post.description}
                  </Text>
                  <Box display={"flex"} alignItems={"center"} mt={2}>
                    <Box>
                      <Link>Pauloski</Link> in{" "}
                      <Link color={"#0b87ff"}>Technology</Link>
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
