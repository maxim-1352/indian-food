import "./DiscoverList.scss";
const DiscoverList = ({ data }) => {
  return (
    <>
      {data.map((d, i) => (
        <div className="discover-item" key={i}>
          <div className="cicle">
            <img src={d.img} alt={d.alt} />
          </div>
          <div className="discover-desc">
            <h3>{d.name}</h3>
            <p>
              {d.desc} <span>${d.price}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DiscoverList;
