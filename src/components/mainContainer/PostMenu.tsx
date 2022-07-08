import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { isDeletingPost, getAllPost } from "../../features/post/postSlice";
import { useNavigate } from "react-router-dom";

interface PostMenuProps {
  userPostId: string;
  postId: string;
}

export const PostMenu: React.FC<PostMenuProps> = ({ userPostId, postId }) => {
  const { user } = useSelector((state: any) => state.auth);
  const { post, isSuccess, isError, isLoading } = useSelector(
    (state: any) => state.post
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePost = () => {
    dispatch(isDeletingPost(postId));
    navigate("/");
    console.log("delete post", userPostId);
  };

  // useEffect(() => {
  //   dispatch(getAllPost());
  // }, [dispatch, navigate]);

  return (
    <Menu>
      <MenuButton bg={"none"} w='5px' h='5px' as={Button}>
        <BsThreeDots fontWeight={"bold"} />
      </MenuButton>
      <MenuList>
        <MenuItem>Mark as Draft</MenuItem>
        {userPostId === user?._id ? (
          <>
            <MenuItem>Edit</MenuItem>
            <MenuItem color={"red"} onClick={handleDeletePost}>
              Delete
            </MenuItem>
          </>
        ) : (
          <></>
        )}
      </MenuList>
    </Menu>
  );
};
