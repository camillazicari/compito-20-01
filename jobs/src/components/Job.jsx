import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);

  const changeStar = () => {
    if (isClicked) {
      return "⭐️";
    } else {
      return "☆";
    }
  };

  const btnFavourite = () => {
    dispatch({
      type: "ADD_TO_FAVOURITES",
      payload: data.company_name,
    });
    setIsClicked(true);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3 align-items-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Button
          type="button"
          className="bg-transparent border-0 text-black fs-4"
          id="star"
          onClick={() => {
            btnFavourite();
          }}
        >
          {changeStar()}
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
