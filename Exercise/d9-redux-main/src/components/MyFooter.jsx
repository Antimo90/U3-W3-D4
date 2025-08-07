import { Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <>
      <Container fluid className="bg-secondary border-top border-black">
        <Row className="text-center me-5 p-2">
          <p className="title fs-3 text-dark-emphasis m-0">
            EpiWorks &copy;{new Date().getFullYear()}
          </p>
        </Row>
      </Container>
    </>
  );
};
export default MyFooter;
