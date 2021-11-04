import Bg from "../img/bg2.png";

const Menu = () => {
  return (
    <div
      className="menu"
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#fff",
          fontSize: "clamp(3rem, 10vw, 4.75rem)",
        }}
      >
        Menu
      </h1>
    </div>
  );
};

export default Menu;
