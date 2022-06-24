import { Box, Button } from '@chakra-ui/react'
import { openCreatePostModal } from '../../features/indexSlice';
import './style.css'
import { useDispatch } from 'react-redux';


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
      <Button as='span'>
        <i className='fas fa-home'></i>
      </Button>
      <Button as='span'>
        <i className='fas fa-bell'></i>
      </Button>
      <Button as='span' onClick={handleCreatePost}>
        <i className='fas fa-plus'></i>
      </Button>
      <Button as='span'>
        <i className='fas fa-wallet'></i>
      </Button>
      <Button as='span'>
        <i className='fas fa-user'></i>
      </Button>
    </Box>
  );
}
