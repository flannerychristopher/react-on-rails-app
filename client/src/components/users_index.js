import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default class UsersIndex extends Component {
  renderUsers() {
    if (!this.props.users) return <div>loading ...</div>;
    return _.map(this.props.users, user => {
      return (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="usersIndex">
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}
