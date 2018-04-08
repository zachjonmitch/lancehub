import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
