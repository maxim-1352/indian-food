import { Link } from "react-router-dom";
import "./TradicionalCuisine.scss";

const TradicionalCuisine = () => {
  return (
    <div className="tradicionalCuisine">
      <div className="wrapper">
        <div className="cuisine">
          <h2>Tradicional cuisine made easy</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            aspernatur facere culpa incidunt odit. Ut saepe animi odit
            repellendus placeat minus nisi numquam
          </p>
          <div className="wrap-cicle">
            <span className="cicle"></span>
            <span className="cicle"></span>
            <span className="cicle"></span>
          </div>
          <div className="cuisine-links">
            <Link to="indian-food/meals">Meals</Link>
            <Link to="indian-food/spices">Spices</Link>
            <Link to="indian-food/book">Book</Link>
            <Link to="indian-food/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradicionalCuisine;
