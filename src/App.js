import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Admin from "./pages/Admin/Admin";
import Video from "./pages/Video/Video";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/video" component={Video} />
        <Route exact path="/admin" component={Admin} />
        <div>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/inscription" component={Inscription} />
          <Route exact path="/Connexion" component={Connexion} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
