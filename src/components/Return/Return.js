import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Return extends Component{

    render(){
        return(
            <>
                <h1>Thank You</h1>
                
                <Link to='/'><button className="btn" onClick={this.props.Reset}>return</button></Link>

            </>
        )
    }
}


export default Return;