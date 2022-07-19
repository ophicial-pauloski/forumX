import { Navbar, Container, Button } from "react-bootstrap";
import { openLoginModal } from "../../features/indexSlice";
import { useDispatch, useSelector } from "react-redux";
import "./navbarMenu.css";
import { LoginModal } from "../modals/LoginModal";
import { RegisterModal } from "../modals/RegisterModal";
import { ProfileDropDown } from '../userProfile/ProfileDropDown';
import {AiFillBell } from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
import { SearchBar } from '../searchBar/SearchBar';

const NavbarMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const handleLoginUser = () => {
    dispatch(openLoginModal());
  };

  return (
    <Navbar className='navN' bg='white w-100 border py-4' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>ForumX</Navbar.Brand>
        <SearchBar />
        <div className='user-props-left align-items-center'>
          <Box mx={3} pos='relative'>
            <AiFillBell size={25}/>
            <Box h={2} w={2} bg='red' color={'white'} borderRadius='50%' pos='absolute' top={'-2px'} right={1}>
            </Box>
          </Box>

          {user ? (
            <span className='mx-3 fs-4 fw-bold text-capitalize'>
              <ProfileDropDown />
            </span>
          ) : (
            <span className='mx-3'>
              {" "}
              <Button onClick={handleLoginUser}>Login</Button>{" "}
            </span>
          )}
        </div>
      </Container>
      <LoginModal />
      <RegisterModal />
    </Navbar>
  );
};

export default NavbarMenu;
