import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';


class Submit extends Component{
    
    
    Submit = (event) => {
        let surveyData = {
            feeling: this.props.State.inputReducer[0],
            understanding: this.props.State.inputReducer[1],
            support: this.props.State.inputReducer[2],
            comments: this.props.State.inputReducer[3]
        }
        axios({
            method: "POST",
            url: "/survey",
            data: surveyData
        }).then((results)=>{
            console.log("axios from reducer worked")
        }).catch((err)=> {
            console.log("err from axios reducer")
        })
      }

    render(){
        let style = {
            borderBottom:"1px solid black",
            marginBottom:"50px",
            display:"block",
            padding:"30px",
        }
        return(
            <>
                <h1>Review your Feedback</h1>
                <span><h2 style={style}>Does everything look good?</h2></span>
               
                {this.props.State.inputReducer.map((item, index)=>{
                    return <div><h3 key={index}>{index + 1}:: {item}</h3><br /></div>
                })}
                
                <Link to='/return'><button className="btn" onClick={(event) => this.Submit(event)}>submit</button></Link>
            </>
        )
    }
}


const connectState = (State) => ({
    State
})

export default connect(connectState)(Submit);