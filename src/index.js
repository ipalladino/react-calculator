import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {loadState} from './actions/actions';
import calculatorApp from './reducers/calculatorApp';
import './splunk-assets/styles/scss/index.css';
import App from './App';
import { createLogger } from 'redux-logger';
import fetch from 'isomorphic-fetch';

const logger = createLogger({
    //empty options
});

const store = createStore(
    calculatorApp,
    applyMiddleware(logger)
);

var calculatorNode = document.getElementById('calculator');
var url = "./state.json";
//get url from data attribute on the #calculator node
if(typeof calculatorNode.dataset.url !== "undefined") {
  url = calculatorNode.dataset.url;
}

fetch(url).then(function(response) {
  return response.json();
}).then(json => {
  store.dispatch(loadState(json));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('calculator')
);
