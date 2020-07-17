import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { logger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(
    combineReducers({
        
    }), 
    applyMiddleware(logger)   
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
