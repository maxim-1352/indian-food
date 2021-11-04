import "./Tastes.scss";

const Tastes = () => {
  return (
    <div className="tastes">
      <div className="wrapper">
        <div className="wrap-items">
          <div className="item">
            <div className="wrap-cicle">
              <span className="cicle"></span>
            </div>
            <h3 className="taste-sub">New tastes</h3>
            <p className="taste-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, sapiente!
            </p>
          </div>
          <div className="item">
            <div className="wrap-cicle">
              <span className="cicle"></span>
              <span className="cicle"></span>
            </div>
            <h3 className="taste-sub">New species</h3>
            <p className="taste-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, sapiente!
            </p>
          </div>
          <div className="item">
            <div className="wrap-cicle">
              <span className="cicle"></span>
              <span className="cicle"></span>
              <span className="cicle"></span>
            </div>
            <h3 className="taste-sub">New dishes</h3>
            <p className="taste-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, sapiente!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tastes;
