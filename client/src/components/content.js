import React from 'react';

import { Route } from 'react-router-dom';

import UsersShow from './users_show';

export default function () {
  return (
    <div className="content">
      <h1>The React on Rails App</h1>
      <Route path="/users/:id" component={UsersShow} />
    </div>
  );
}
