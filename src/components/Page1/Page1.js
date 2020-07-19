import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./Page1.css";
import { connect } from "react-redux";
//import { Click, Change } from '../App/Handler.js';



class Page1 extends Component {
    
    

    //      Change = (event, question) => {
    //     console.log("clicked")
    //       console.log(event.target.value)
    //       this.setState({
    //           [question]: event.target.value
    //      })
     
    //   }
    //         Click = (event, actionName) => {
    //       console.log('clicked', event)
    //       this.props.dispatch({
    //           type: actionName,
    //           payload: this.state
    //       })
    //       this.props.history.push('/page2');
    //   }
    // state = {
    //     survey:{
    //       question: '',
    //       question: '',
    //       question: '',
    //       question: '',
    //    } 
    // }
    

    render(){
        return(
            <>
              <Router>
                <h1>How are you feeling today?</h1>
                <input onChange={(event) => this.props.Change(event, "question1")} type="text" placeholder="How are you feeling" />
                <Link to="/page2"><button className="btn" onClick={(event)=> this.props.Click(event,"ADD_PAGE1", "/page2")}>click</button></Link>
               </Router>
            </>
        )
    }
}
const connectState = (State) => ({
    State
})

export default connect(connectState)(Page1);