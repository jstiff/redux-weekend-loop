import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";


class Page4 extends Component{

    render(){
        return(
            <>
                <Router>
                    <h1>Any comments you want to leave?</h1>
                    <input onChange={(event) => this.props.Change(event, "question4")} type="text" placeholder="leave us comments" />
                    <Link to='/submit'><button className="btn" onClick={(event) => this.props.Click(event, "ADD_PAGE4", "question4")}>click</button></Link>
                </Router>
            </>
        )
    }
}


const connectState = (State) => ({
    State
})

export default connect(connectState)(Page4);