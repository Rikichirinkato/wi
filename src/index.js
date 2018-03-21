import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = [];

const widget = (state = initState, action) => {
    if(action.type === 'ADD'){
        return [
            ...state,
            action.buy
        ]
    } else if(action.type === 'Sort'){
        return [
            action.buy
        ]
    } 
    return state;
}

const store = createStore(widget);


ReactDOM.render(
    <Provider store={ store }>
        <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
