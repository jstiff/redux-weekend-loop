import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import RadioBtn from '../RadioBtn/RadioBtn';

class Page3 extends Component{
    id = [1,2,3,4,5]
    
   render(){
    const spanStyle1 = {
        display:"inlineBlock",
        marginRight:"190px",
        fontSize:"20px",
        fontFamily: "monospace",
    }
       const spanStyle2 = {
           display:"inlineBlock",
           marginLeft:"160px",
           fontSize:"20px",
           fontFamily: "monospace",
       }
    
        return(
            <>
                <Router>
                    <h1>How well are you being supported?</h1>
                        <span style={spanStyle1}>Not much</span>
                        <span style={spanStyle2}>Alot</span>
                        <form>
                        
                        {this.id.map((item)=>{
                            return <RadioBtn key={item} BtnChange={this.props.BtnChange}/>
                        })}
                        </form>
                    


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