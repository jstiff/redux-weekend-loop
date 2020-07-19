import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";


class Page2 extends Component{
    

    render(){
        return(
            <>
                <Router>
                    <h1>How well do you understand the content?</h1>
                    <input onChange={(event) => this.props.Change(event, "question2")} type="text" placeholder="How are  you feeling" />
                    <Link to='/page3'><button className="btn" onClick={(event) => this.props.Click(event, "ADD_PAGE2", "/page3")}>click</button></Link>
               </Router>
                
            </>
        )
    }
}

const connectState = (State) => ({
    State
})

export default connect(connectState)(Page2);