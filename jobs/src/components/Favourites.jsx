import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => {
    return state.liked.content;
  });

  return (
    <ListGroup>
      {fav.map((azienda, i) => {
        return (
          <div
            key={i}
            className="d-flex justify-content-between my-2 mx-5 border border-black p-1"
          >
            <Link to={`/${azienda}`}>
              <ListGroup.Item className="border-0">{azienda}</ListGroup.Item>
            </Link>
            <Button
              type="button"
              className="bg-transparent border-danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_FAVOURITES",
                  payload: azienda,
                });
              }}
            >
              🗑️
            </Button>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default Favourites;
