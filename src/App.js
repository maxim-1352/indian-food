import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Meals from "./pages/Meals";
import Spices from "./pages/Spices";
import Book from "./pages/Book";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="indian-food/menu" component={Menu} />
          <Route path="indian-food/" exact component={Home} />

          <Route path="indian-food/events" component={Events} />
          <Route path="indian-food/contact" component={Contact} />
          <Route path="indian-food/meals" component={Meals} />
          <Route path="indian-food/spices" component={Spices} />
          <Route path="indian-food/book" component={Book} />
          <Route path="indian-food/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
