import React, { Component } from 'react';

import UsersIndex from './components/users_index';
import { Route, Link } from 'react-router-dom';
import UsersShow from './components/users_show';
import PostsIndex from './components/posts_index';
import Welcome from './components/welcome';
import About from './components/about';
import Flanthedev from './components/flanthedev';

export default class App extends Component {
  render() {
    return (
      <div>
        <UsersIndex />
        <div className="content">
          <nav>
            <Link to="/">Welcome Page</Link>
            <Link to="/posts">View All Posts</Link>
            <Link to="/about">About this App</Link>
            <Link to="/flanthedev">Made by flanthedev</Link>
          </nav>
          <h1>The React on Rails App</h1>
          <Route exact path="/" component={Welcome} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/about" component={About} />
          <Route path="/flanthedev" component={Flanthedev} />
          <Route path="/users/:id" component={UsersShow} />
        </div>
      </div>
    );
  }
}
