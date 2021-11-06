import "./Picture1.scss";

const Picture1 = ({ Bg }) => {
  return (
    <div
      className="picture"
      style={{
        background: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Picture1;
