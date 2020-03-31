import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation.js";
import Student from "./components/Student";
import History from "./components/History";
import Redirect from './components/Redirect';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={History}>
        <Navigation></Navigation>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student/:studentname/:studentno?" component={Student}></Route>
            <Route path="/redirect" component={Redirect}></Route>
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
