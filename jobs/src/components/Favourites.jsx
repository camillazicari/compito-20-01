import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const fav = useSelector((state) => {
    return state.liked.content;
  });
  console.log(fav);

  return (
    <ListGroup>
      {fav.map((azienda, i) => {
        return <ListGroup.Item key={i}>{azienda}</ListGroup.Item>;
      })}
    </ListGroup>
  );
};

export default Favourites;
