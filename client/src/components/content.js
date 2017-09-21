import React from 'react';

import { Route } from 'react-router-dom';

import UsersShow from './users_show';

export default function () {
  return (
    // <Route exact path="/" component={UsersIndex} />
    <Route path="/users/:id" component={UsersShow} />
  );
}
