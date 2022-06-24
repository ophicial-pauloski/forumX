import { Form } from "react-bootstrap";
import './mainTop.css';

export const MainTop = () => {
  return (
    <div className='d-flex align-items-center justify-content-between my-4'>
      <div className='select-post'>
        <Form.Select className="py-2 px4">
          <option>Latest</option>
          <option>New</option>
          <option>Oldest</option>
        </Form.Select>
      </div>
      <div className="d-flex align-items-center">
          <div className="in-d me-2"></div>
        <span>Mark all as read</span>
      </div>
    </div>
  );
};
