import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { BrowserRouter, Switch } from 'react-router-dom';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

const store = createStore(
  reducers,
  applyMiddleware(promise, thunk)
);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
