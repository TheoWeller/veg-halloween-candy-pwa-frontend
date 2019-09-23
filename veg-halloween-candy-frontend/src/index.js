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

const backgroundDesktop = {
  "background-image": "url('https://res.cloudinary.com/dvlthlwhv/image/upload/v1569279855/ancc9spippop5wtylejr.jpg')",
  "background-blend-mode": "screen",
  "background-repeat":"no-repeat",
  "background-position": "center center",
  "background-size": "100% 100%",
  "background-attachment": "fixed"
}

const backgroundMobile = {
  "background-image": "url('https://res.cloudinary.com/dvlthlwhv/image/upload/v1569280573/hq53okrr7oqqvixit8lg.gif')",
  "background-blend-mode": "screen",
  "background-repeat":"no-repeat",
  "background-position": "center center",
  "background-size": "100% 100%",
  "background-attachment": "fixed"
}

const handleBackground = (desktopStyles, mobileStyles) => {
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  return width > 760 ? desktopStyles : mobileStyles
}

ReactDOM.render(
  <div id="app-container">
    <div id="super-spooky-background" style={handleBackground(backgroundDesktop, backgroundMobile)}>
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
