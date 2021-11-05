import { useState } from "react";

import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [openLink, setOpenLink] = useState(false);

  const toggleNavbar = () => {
    setOpenLink(!openLink);
  };

  return (
    <div className="top">
      <div className="inner">
        <div className="nav-wrap">
          <div className="logo">
            <NavLink to="/">Brunch</NavLink>
          </div>
          <div className="nav">
            <div className="leftSide">
              <NavLink to="indian-food/">Welcome</NavLink>

              <NavLink to="indian-food/menu">Menu</NavLink>

              <NavLink to="indian-food/events">Events</NavLink>

              <NavLink to="indian-food/contact">Contact</NavLink>
            </div>
            <div className="rightSide">
              <div className="hiddenLinks" id={openLink ? "open" : "close"}>
                <NavLink to="indian-food/" onClick={toggleNavbar}>
                  Welcome
                </NavLink>
                <NavLink to="indian-food/menu" onClick={toggleNavbar}>
                  Menu
                </NavLink>
                <NavLink to="indian-food/events" onClick={toggleNavbar}>
                  Events
                </NavLink>
                <NavLink to="indian-food/contact" onClick={toggleNavbar}>
                  Contact
                </NavLink>
              </div>
            </div>
            <button className="btn" onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
