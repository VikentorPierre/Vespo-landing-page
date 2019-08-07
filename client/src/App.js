import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header";
//import Home from "./components/home";
import LandingPage from "./components/landingPage";
/// the holy green #23d279

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={LandingPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
