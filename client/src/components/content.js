import React from 'react';

import { Route } from 'react-router-dom';

import UsersShow from './users_show';

export default function () {
  return (
    <div className="content">
      <Route path="/users/:id" component={UsersShow} />
    </div>
  );
}
