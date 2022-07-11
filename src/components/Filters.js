import { Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
const Filters = () => {
  const {
    productDispatch,
    productState: {  byRating },
  } = CartState();



  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button className="bttn"
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
        //style={padding-bottom:20px}
      >
        Clear Filters
      </Button>

    <img alt="burger" margin-top="20" src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/iud0wtrwv7sqaswspcee"/>
    </div>
  );
};

export default Filters;
