import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container fluid>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col>
          <Button
            className="border-0 mt-3"
            onClick={() => {
              dispatch(addJob(data));
            }}
          >
            <i className="bi bi-star"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Job;
