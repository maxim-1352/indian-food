import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="wrap-items">
          <div className="left-item">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem
              soluta ex at libero asperiores
            </p>
          </div>
          <div className="right-item">
            <div className="wrap-about">
              <div className="about-item">
                <h3>About</h3>

                <Link to="indian-food/">Team</Link>
                <Link to="indian-food/">Join us</Link>
                <Link to="indian-food/">Career</Link>
                <Link to="indian-food/">About</Link>
              </div>
              <div className="about-item">
                <h3>About</h3>

                <Link to="indian-food/">Team</Link>
                <Link to="indian-food/">Join us</Link>
                <Link to="indian-food/">Career</Link>
                <Link to="indian-food/">About</Link>
              </div>
              <div className="about-item">
                <h3>About</h3>

                <Link to="indian-food/">Team</Link>
                <Link to="indian-food/">Join us</Link>
                <Link to="indian-food/">Career</Link>
                <Link to="indian-food/">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
