import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions';

class UsersIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    if (!this.props.users) return <div>loading ...</div>;
    return _.map(this.props.users, user => {
      return (
        <li key={user.id}>
          <Link to={`users/${user.id}`}>
            {user.name}
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>All Users</h1>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UsersIndex);
