import Header from "../components/Header/Header";
import Tradicional from "../components/Traditional/Tradicional";
import Tastes from "../components/Tastes/Tastes";
import Dishes from "../components/Dishes/Dishes";
import TradicionalCuisine from "../components/TradicionalCuisine/TradicionalCuisine";
import Discover from "../components/Discover/Discover";
import Picture1 from "../components/PictureSection/Picture1";
import Booking from "../components/Booking/Booking";
import DiscoverNew from "../components/DiscoverNew/DiscoverNew";
import Quote from "../components/Quote/Quote";
import Bg1 from "../img/bg4.png";
import Bg2 from "../img/bg5.png";

const Home = ({ Bg }) => {
  return (
    <>
      <Header />
      <Tradicional />
      <Tastes />
      <Dishes />
      <TradicionalCuisine />
      <Discover />
      <Picture1 Bg={Bg1} />
      <Booking />
      <Picture1 Bg={Bg2} />
      <DiscoverNew />
      <Quote />
    </>
  );
};

export default Home;
