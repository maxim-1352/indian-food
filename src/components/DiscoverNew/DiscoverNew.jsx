import "./DiscoverNew.scss";
import { data5 } from "../../data";
import DiscoverNewList from "./DiscoverNewList";

const DiscoverNew = () => {
  return (
    <div className="discover-new">
      <div className="wrapper">
        <div className="wrap-dishes">
          <h2>
            <span>Discover</span> <br /> our new menu
          </h2>
          <div className="disc-items">
            <DiscoverNewList data={data5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverNew;
