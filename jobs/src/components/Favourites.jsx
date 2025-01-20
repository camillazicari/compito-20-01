import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const fav = useSelector((state) => {
    return state.liked.content;
  });

  return (
    <ListGroup>
      {fav.map((azienda, i) => {
        return (
          <Link key={i} to={`/${azienda}`}>
            <ListGroup.Item>{azienda}</ListGroup.Item>
          </Link>
        );
      })}
    </ListGroup>
  );
};

export default Favourites;
