import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import promise from 'redux-promise';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import UsersIndex from './components/users_index';
import UsersShow from './components/users_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UsersIndex} />
        <Route path="/users/:id" component={UsersShow} />
      </Switch>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root')
);

registerServiceWorker();
