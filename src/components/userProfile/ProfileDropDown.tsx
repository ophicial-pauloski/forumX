import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button
} from "@chakra-ui/react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from '../../features/auth/authSlice';


export const ProfileDropDown = () => {
  const dispatch = useDispatch();

const handleLogOutUser = () => {
  dispatch(logout());
}

  return (
    <Box>
      <Menu>
        <MenuButton as={Button}>
          <i className='fas fa-user'></i>
        </MenuButton>
        <MenuList>
          <MenuItem>View Profile</MenuItem>
          <MenuItem
            _hover={{ bg: "red.300" }}
            w={"100%"}
            bg='red'
            color={"white"}
            onClick={handleLogOutUser}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
