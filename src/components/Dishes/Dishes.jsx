import "./Dishes.scss";
import Dish from "./Dish";
import { data } from "../../data";

const Dishes = () => {
  return (
    <div className="dishes">
      <div className="wrapper">
        <div className="dishes-bg">
          <h2>
            <span>India</span> <br /> on your plate
          </h2>
          <div className="wrap-items">
            <Dish data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
