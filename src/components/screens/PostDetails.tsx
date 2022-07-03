import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPostById } from '../../features/post/postSlice'
import {BsArrowLeft} from 'react-icons/bs'

export const PostDetails = () => {
  const dispatch = useAppDispatch()
  const { postById } = useAppSelector((state: any) => state.post)
  const { id } = useParams()
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(fetchPostById(id))
  } , [dispatch, id])

  return (
    <Box pos={'relative'} mt={5}>
      <Box zIndex={1} mb={4} display={"flex"} alignItems={"center"}>
        <Box cursor={'pointer'} bg='#0b87ff' p={2} rounded='full' mr={5}onClick={() =>{
          navigate('/')
        }} >
          <BsArrowLeft />
        </Box>
        Post
      </Box>
      {postById ? (
        <Box>
          <Heading as={'h3'}>{postById.title}</Heading>
          <Text>{postById.description}</Text>
          </Box>
      ) : ( <Box>Loading...</Box> )}
    </Box>
  ); }
