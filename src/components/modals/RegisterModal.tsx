import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterModal } from "../../features/indexSlice";
import { register, reset } from "../../features/auth/authSlice";
import { SpinnerLoader } from '../SpinnerLoader';

export const RegisterModal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, userName, email, password, confirmPassword } =
    formData;
  const dispatch = useDispatch();
  const { registerModal } = useSelector((state: any) => state.indexSlice);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );
const toast = useToast();

useEffect(() => {
  if(isError){
    toast({
      title: "Error",
      description: `${message}`,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    
  }
  if(isSuccess ){
    toast({
      title: "Success",
      description: `${message.message}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(closeRegisterModal());
  }
  dispatch(reset());
}, [user, isSuccess, isError, message, toast, dispatch]);


  const onChange = (e: string | any): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmitFormData = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Password does not match",
        description: "Please try again",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setFormData({ ...formData, password: "", confirmPassword: "" });
    } else {
    dispatch(register(formData));
    }

  }

  if (isLoading) {
    return (
      <SpinnerLoader />
    )
  }

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={registerModal}
        onClose={() => dispatch(closeRegisterModal())}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"} mb={3}>
              Start enjoy awesome features
            </Text>
            <Form onSubmit={handleSubmitFormData}>
              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <Form.Label >First Name</Form.Label>
                  <Form.Control
                    type='text'
                    value={firstName}
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label >Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    value={lastName}
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    onChange={onChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className='mb-3'>
                <Form.Label >Email</Form.Label>
                <Form.Control
                  type='email'
                  value={email}
                  id='email'
                  name='email'
                  placeholder='paul@gmail.com'
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label >User Name</Form.Label>
                <Form.Control
                  type='text'
                  value={userName}
                  id='userName'
                  name='userName'
                  placeholder='User Name'
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label >Password</Form.Label>
                <Form.Control
                  type='password'
                  value={password}
                  id='password'
                  name='password'
                  placeholder='Password'
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label >
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type='password'
                  value={confirmPassword}
                  id='confirmPassword'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  onChange={onChange}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                sign up
              </Button>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
