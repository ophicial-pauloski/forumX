import { Text } from "@chakra-ui/react";
import { Form } from "react-bootstrap";
import './mainTop.css';
import { useSelector } from 'react-redux';


export const MainTop = () => {
  const {user} = useSelector((state: any) => state.auth);
  return (
    <div className='d-flex align-items-center justify-content-between my-4'>
      <div className='select-post'>
        <Form.Select className="py-2 px4">
          <option>Latest</option>
          <option>New</option>
          <option>Oldest</option>
        </Form.Select>
      </div>
      <Text>Welcome back, {user?.firstName} {user?.lastName}</Text>
      <div className="d-flex align-items-center">
          <div className="in-d me-2"></div>
        <span>Mark all as read</span>
      </div>
    </div>
  );
};
