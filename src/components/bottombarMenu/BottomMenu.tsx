import { Box, Button } from '@chakra-ui/react'
import { openCreatePostModal } from '../../features/indexSlice';
import './style.css'
import { useDispatch } from 'react-redux';
import { BiHomeSmile } from "react-icons/bi";
import {BsBellFill} from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { BiWallet } from "react-icons/bi";
import { FaUser } from "react-icons/fa";


export const BottomMenu = () => {

    const dispatch = useDispatch();
    const handleCreatePost = (): void => {
        dispatch(openCreatePostModal());
    }
  return (
    <Box
      pos='fixed'
      bottom='0'
      bg={"white"}
      borderTop='2px'
      borderTopColor={"gray.400"}
      py={4}
      px={4}
      className='bottom-menu'
    >
      <Button>
        <BiHomeSmile />
      </Button>
      <Button>
        <BsBellFill />
      </Button>
      <Button onClick={handleCreatePost}>
        <IoIosAddCircle />
      </Button>
      <Button>
        <BiWallet />
      </Button>
      <Button>
        <FaUser />
      </Button>
    </Box>
  );
}
