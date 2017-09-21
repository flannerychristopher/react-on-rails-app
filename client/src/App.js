import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    window.fetch('users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <h1>Toy App</h1>
    );
  }
}

export default App;
