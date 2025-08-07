import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteJob } from "../redux/actions";

const SingleFavourite = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 text"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`} className="text-dark fw-bold ">
            {data.company_name}
          </Link>
        </Col>
        <Col xs={8}>
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            {data.title}
          </a>
        </Col>
        <Col xs={1}>
          <Button
            variant="outline-info"
            onClick={() => {
              dispatch(deleteJob(data._id));
            }}
          >
            <Trash />
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default SingleFavourite;
