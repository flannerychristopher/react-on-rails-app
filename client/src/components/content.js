import React from 'react';
import { Route, Link } from 'react-router-dom';
import UsersShow from './users_show';
import Welcome from './welcome';
import About from './about';
import Flanthedev from './flanthedev';

export default function () {
  return (
    <div className="content">
      <nav>
        <Link to="/">Welcome Page</Link>
        <Link to="/about">About this App</Link>
        <Link to="/flanthedev">Made by flanthedev</Link>
      </nav>
      <h1>The React on Rails App</h1>
      <Route exact path="/" component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/flanthedev" component={Flanthedev} />
      <Route path="/users/:id" component={UsersShow} />
    </div>
  );
}
