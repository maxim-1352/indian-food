import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="read">
        <h1>
          <span className="special">Brunch</span>
          <br />
          full website
        </h1>
        <div className="a-center">
          <Link to="indian-food/menu">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
