import { Container} from "react-bootstrap";
import { MainTop } from "./MainTop";
import './main.css';
import { PostCard } from "./PostCard";
import { BottomMenu } from "../bottombarMenu/BottomMenu";

export const Main = () => {
    return (
      <section className='interface'>
        <Container>
          <MainTop />
          <div className='post_container'>
            <PostCard />
          </div>
        </Container>
        <BottomMenu />
      </section>
    );
};
