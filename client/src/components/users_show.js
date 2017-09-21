import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions';

class UsersShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchUser(id);
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>Loading user ...</div>;
    return (
      <div>
        <Link to="/">Back to Index</Link>
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


// export default class UsersShow extends Component {
//   render() {
//     return <div>this is a user!</div>
//   }
// }