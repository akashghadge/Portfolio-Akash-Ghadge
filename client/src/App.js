import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './Components/Home/HomePage';
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"
import Forum from "./Components/Forum/Forum"
import Projects from "./Components/Home/Projects"
import Sign from './Components/Auth/Sign';
import NavBar from "./Components/Navbar/NavBar"



function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/sign" component={Sign}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/forum" component={Forum}></Route>
      </Switch>
    </>
  );
}

export default App;
