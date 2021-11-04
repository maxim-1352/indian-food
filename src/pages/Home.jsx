import Header from "../components/Header/Header";
import Tradicional from "../components/Traditional/Tradicional";
import Tastes from "../components/Tastes/Tastes";
import Dishes from "../components/Dishes/Dishes";
import TradicionalCuisine from "../components/TradicionalCuisine/TradicionalCuisine";
import Discover from "../components/Discover/Discover";
import Picture1 from "../components/PictureSection/Picture1";
import Booking from "../components/Booking/Booking";
import Picture2 from "../components/PictureSection/Picture2";
import DiscoverNew from "../components/DiscoverNew/DiscoverNew";
import Quote from "../components/Quote/Quote";

const Home = () => {
  return (
    <>
      <Header />
      <Tradicional />
      <Tastes />
      <Dishes />
      <TradicionalCuisine />
      <Discover />
      <Picture1 />
      <Booking />
      <Picture2 />
      <DiscoverNew />
      <Quote />
    </>
  );
};

export default Home;
