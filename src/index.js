import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { logger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';

const inputReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PAGE1":
        case "ADD_PAGE2":
        case "ADD_PAGE3":
        case "ADD_PAGE4": 
            return[ ...state, action.payload] 
            break;   
        default:
             return state       
    }
    
}   

// const submitReducer = (action) => {
//     if(action.type === "SUBMIT"){
//         axios({
//             method: "POST",
//             url: "/survey",
//             data: action.payload
//         }).then((results)=>{
//             console.log("axios from reducer worked")
//         }).catch((err)=> {
//             console.log("err from axios reducer")
//         })
//     }
// }
//     if(action.type === "ADD_PAGE1"){
//         return[...state, action.payload]
//     }
//     return state
// }



const store = createStore(
    combineReducers({
        inputReducer,
        
    }), 
    applyMiddleware(logger)   
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
