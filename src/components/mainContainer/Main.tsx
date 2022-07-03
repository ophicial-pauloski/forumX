import { Container } from "react-bootstrap";
import "./main.css";
import { BottomMenu } from "../bottombarMenu/BottomMenu";
import { Home } from '../screens/Home';



export const Main = () => {
  return (
      <section className='interface'>
        <Container>
          <Home />
        </Container>
        <BottomMenu />
      </section>
  );
};
