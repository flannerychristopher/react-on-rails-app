import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UsersShow extends Component {
  // to fetch most recent user data from the server:
  componentDidMount() {
    if (!this.props.user) {
      const { id } = this.props.match.params;
      this.props.fetchUser(id);
    }
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading user ...</div>;
    return (
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  return { user: users[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchUser })(UsersShow);
