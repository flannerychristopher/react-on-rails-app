import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch } from 'react-router-dom';

import promise from 'redux-promise';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// <Provider store={createStoreWithMiddleware(reducers)}>
const store = createStore(
  reducers,
  applyMiddleware(promise, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>

  , document.getElementById('root')
);

registerServiceWorker();

// <Provider store={createStoreWithMiddleware(reducers)}>
//   <div>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={UsersIndex} />
//         <Route path="/users/:id" component={UsersShow} />
//         <UsersIndex />
//       </Switch>
//     </BrowserRouter>
//   </div>
// </Provider>