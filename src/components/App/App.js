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
//import { Change } from './Handler.js'


class App extends Component {
  
  state = {
    survey: ''
    
 }

 BtnChange = (event) => {
    console.log("readiobtn clicked", event.target);
 }

  Change = (event) => {
    console.log("clicked", event)
      console.log(event.target.value)
      this.setState({
        survey: event.target.value
        
          
     })
 
  }

  Click = (event, actionName, path) => {
    
    console.log('clicked to route', path)
    console.log("state:", this.state.survey)
    this.props.dispatch({
        type: actionName,
        payload: this.state.survey
    
    })
    
}
 

 
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" render={()=> <Page1 Click={this.Click} Change={this.Change}/>}/>
          <Route path="/page2" render={() => <Page2 Click={this.Click} Change={this.Change}/>}/>
          <Route path="/page3" render={() => <Page3 Click={this.Click} BtnChange={this.BtnChange}/>}/>
          <Route path="/page4" render={() => <Page4 Click={this.Click} Change={this.Change}/>}/>
          <Route path="/submit" render={() => <Submit Submit={this.Submit}/>}/>
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


// component={()=> <Page1 change={this.Change}/>}