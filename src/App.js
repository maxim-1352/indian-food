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
          <Route path="/menu" component={Menu} />
          <Route path="/" exact component={Home} />

          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/meals" component={Meals} />
          <Route path="/spices" component={Spices} />
          <Route path="/book" component={Book} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
