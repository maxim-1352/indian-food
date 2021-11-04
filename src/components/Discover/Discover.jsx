import "./Discover.scss";
import { data2, data3 } from "../../data";
import DiscoverList from "./DiscoverList";

const Discover = () => {
  return (
    <div className="discover">
      <div className="wrapper">
        <div className="newMenu">
          <h2>
            <span>Discover</span> <br /> our new menu
          </h2>
          <div className="wrap-box">
            <div className="left">
              <DiscoverList data={data2} />
            </div>
            <div className="right">
              <DiscoverList data={data3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
