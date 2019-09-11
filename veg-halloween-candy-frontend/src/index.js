import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index'
import history from './history';

export let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <div id="app-container">
    <div id="super-spooky-background">
      <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
      </Provider>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
