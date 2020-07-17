import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Submit from "../Submit/Submit";
import Return from "../Return/Return";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={Page1}/>
          <Route path="/page2" component={Page2}/>
          <Route path="/page3" component={Page3}/>
          <Route path="/page4" component={Page4}/>
          <Route path="/submit" component={Submit}/>
          <Route path="/return" component={Return}/>
        </Router>
      </div>
    );
  }
}
const connectState = (State) => ({
  State
})
export default connect(connectState)(App);
