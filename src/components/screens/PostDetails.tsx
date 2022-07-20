import { Box, Button, Heading, Image, Text, Textarea } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById } from "../../features/post/postSlice";
import { BsArrowLeft } from "react-icons/bs";
import { SpinnerLoader } from "../SpinnerLoader";

export const PostDetails = () => {
  const dispatch = useAppDispatch();
  const { postById, isLoading, isError, message } = useAppSelector(
    (state: any) => state.post
  );
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, isError, message]);

  if (isLoading) {
    return (
      <Box mt={5}>
        <SpinnerLoader />
      </Box>
    );
  }

  return (
    <Box pos={"relative"} mt={5}>
      <Box zIndex={1} mb={4} display={"flex"} alignItems={"center"}>
        <Box
          cursor={"pointer"}
          bg='#0b87ff'
          p={2}
          rounded='full'
          mr={5}
          onClick={() => {
            navigate("/");
          }}
        >
          <BsArrowLeft />
        </Box>
        Post
      </Box>
      {postById ? (
        <Box>
          <Box display={"flex"} alignItems='center'>
            <Image
              rounded={"full"}
              objectFit='cover'
              style={{ height: "48px", width: "48px" }}
              src='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Box ml={2}>
              <Text lineHeight={1}>Paul Asukwo</Text>
              <Text lineHeight={1}>@paulasukwo</Text>
            </Box>
          </Box>
          <Box mt={2} mb={3}>
            <Heading as={"h3"}>{postById.title}</Heading>
            <Text>{postById.description}</Text>
          </Box>
          <hr />
          <Box
            border={"1px"}
            borderColor={"#e5e5e5"}
            borderRadius={"md"}
            display={"flex"}
            alignItems={"center"}
            mt={2}
          >
            <Textarea
              style={{ border: "none" }}
              _focus={{ boder: "none" }}
              cols={1}
              size='sm'
              placeholder='Comment here'
            />
            <Button bg={"#0d6efd"} color='white' ml={2} mr={2}>
              Comment
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </Box>
  );
};
