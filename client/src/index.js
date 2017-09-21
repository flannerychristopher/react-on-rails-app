import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import UsersIndex from './components/users_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <UsersIndex />
  </Provider>

  , document.getElementById('root')
);

registerServiceWorker();
