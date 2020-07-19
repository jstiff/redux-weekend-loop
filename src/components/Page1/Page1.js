import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "./Page1.css";
import { connect } from "react-redux";




class Page1 extends Component {
    
    
    render(){
        return(
            <>
              <Router>
                <h1>How are you feeling today?</h1>

                <input onChange={(event) => this.props.Change(event, "question1")} type="text" placeholder="How are you feeling" />

                <Link to='/page2' onClick={(event)=> this.props.Click(event,"ADD_PAGE1", "/page2")}><button className="btn">click</button></Link>
               
               </Router>
            </>
        )
    }
}
const connectState = (State) => ({
    State
})

export default connect(connectState)(Page1);