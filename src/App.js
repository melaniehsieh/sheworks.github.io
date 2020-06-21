import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import Time from "./Time";
import { NoMatch } from "./NoMatch";
import Navbar from "./Navbar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/time" component={Time} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
