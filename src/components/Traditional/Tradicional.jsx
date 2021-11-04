import "./Tradicional.scss";
import Spoone from "../../img/spoone.png";

const Tradicional = () => {
  return (
    <div className="tradicional">
      <div className="wrapper">
        <div className="t-wrapper">
          <div className="t-left">
            <div className="text">
              <h2 className="text-sub">Indian traditional flavours</h2>
              <div className="text-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                officia dolorem tempora ducimus ipsam est expedita, perspiciatis
                voluptatibus eos quas unde quia eum aliquam pariatur!
              </div>
            </div>
          </div>
          <div className="t-right">
            <div className="t-img">
              <img src={Spoone} alt="spoone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradicional;
