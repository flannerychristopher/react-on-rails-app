import React, { Component } from 'react';

import UsersIndex from './components/users_index';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <UsersIndex />
        <Content />
      </div>
    );
  }
}

export default App;
