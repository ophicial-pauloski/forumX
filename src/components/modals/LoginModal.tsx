import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal, openRegisterModal } from "../../features/indexSlice";
import { useState, useEffect } from "react";
import { login, reset } from "../../features/auth/authSlice";
import { SpinnerLoader } from '../SpinnerLoader';


export const LoginModal = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);


  const dispatch = useDispatch();
  const { loginModal } = useSelector((state: any) => state.indexSlice);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );


  const toast = useToast();

  const handleOpenRegisterModal = () => {
    dispatch(openRegisterModal());
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Success",
        description: "Login Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      dispatch(closeLoginModal());
    }
    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, toast]);

  const onchangeOnLoginForm = (e: string | any): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitLoginForm = (e: any) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={loginModal}
        onClose={() => dispatch(closeLoginModal())}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login To Get Started</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <SpinnerLoader />
            ) : (
              <>
                <Form onSubmit={handleSubmitLoginForm}>
                  <Form.Group className='mb-3'>
                    <Form.Label>Email or User Name</Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      id='email'
                      name='email'
                      placeholder='Email'
                      onChange={onchangeOnLoginForm}
                    />
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control
                      type={show ? "text" : "password"}
                      value={password}
                      id='password'
                      name='password'
                      placeholder='Password'
                      onChange={onchangeOnLoginForm}
                    />
                    <Button float={'right'} h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formHorizontalCheck'
                  >
                    <Col>
                      <Form.Check label='Remember me' />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className='mb-3'>
                    <Col>
                      <Button type='submit'>Sign in</Button>
                    </Col>
                  </Form.Group>
                </Form>
                <span onClick={handleOpenRegisterModal}>
                  You don't an account?{" "}
                  <Link onClick={handleOpenRegisterModal}>Create Account</Link>
                </span>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
