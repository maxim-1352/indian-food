import { Link } from "react-router-dom";
import "./DiscoverNewList.scss";

const DiscoverNewList = ({ data }) => {
  return (
    <>
      {data.map((d, i) => (
        <div className="disc-items" key={i}>
          <div className="item">
            <div className="items-img">
              <img src={d.img} alt={d.alt} />
            </div>
            <div className="wrap-desc">
              <div className="category">
                <Link to="indian-food/" className="cat">
                  {d.category}
                </Link>
                <span className="slash">/</span>
                <span className="date">{d.date}</span>
              </div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <Link to="/">{d.buttonText}</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DiscoverNewList;
