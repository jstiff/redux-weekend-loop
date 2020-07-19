import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";


class Page3 extends Component{

    render(){
        return(
            <>
                <Router>
                    <h1>How well are you being supported?</h1>
                    <input onChange={(event) => this.props.Change(event, "question3")} type="text" placeholder="let us know" />
                    <Link to='/page4'><button className="btn" onClick={(event) => this.props.Click(event, "ADD_PAGE3")}>click</button></Link>
                </Router>
                
            </>
        )
    }
}

const connectState = (State) => ({
    State
})

export default connect(connectState)(Page3);