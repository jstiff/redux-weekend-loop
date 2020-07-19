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
        return(
            <>
                <h1>Review your Feedback</h1>
                <h3>Does everything look good?</h3>
                {/* {JSON.stringify(this.props.State.inputReducer)} */}
                {this.props.State.inputReducer.map((item, index)=>{
                    return <div><h3 key={index}>{item}</h3><br /></div>
                })}
                <Link to='/return'><button className="btn" onClick={(event) => this.Submit(event)}>submit survey</button></Link>
            </>
        )
    }
}


const connectState = (State) => ({
    State
})

export default connect(connectState)(Submit);