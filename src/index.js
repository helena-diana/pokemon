import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <Routes />
  </Provider>,  
  document.getElementById('root')
);

