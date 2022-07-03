import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { closeCreatePostModal } from "../../features/indexSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createPost } from "../../features/post/postSlice";

export const CreatePostModal = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formData;
  const dispatch = useDispatch();
  const { createPostModal } = useSelector((state: any) => state.indexSlice);
  const { post, isError, isSuccess, message } = useSelector(
    (state: any) => state.post
  );

  const toast = useToast();

  const handleChangeOnCreatePostForm = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: `${message.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    if (isSuccess) {
      toast({
        title: "Success",
        description: `${message.message}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      
    }
  }, [post, isError, isSuccess, message, dispatch, toast]);

  const handleCreatePost = (e: any) => {
    e.preventDefault();
    if (title.length === 0) {
      toast({
        title: "Error",
        description: "Title is required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    if (description.length === 0) {
      toast({
        title: "Error",
        description: "Description is required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    dispatch(createPost(formData));
    if(title.length !== 0 && description.length !== 0){
      isSuccess && !isError && dispatch(closeCreatePostModal());
      console.log(formData);
      window.location.reload();
      
    }
    return;
  };

  return (
    <>
      <Modal
        isOpen={createPostModal}
        onClose={() => dispatch(closeCreatePostModal())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Post title</FormLabel>
              <Input
                value={title}
                id='title'
                name='title'
                type='text'
                onChange={handleChangeOnCreatePostForm}
              />
              <FormHelperText>
                The header must not be less than 50 characters
              </FormHelperText>
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                id='description'
                name='description'
                placeholder='Here is a sample placeholder'
                onChange={handleChangeOnCreatePostForm}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={handleCreatePost}>
              Create Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
