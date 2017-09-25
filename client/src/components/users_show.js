import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import _ from 'lodash';

import PostList from './post_list';

class UsersShow extends Component {
  // to fetch most recent user data from the server:
  componentDidMount() {
    if (!this.props.user) {
      const { id } = this.props.match.params;
      this.props.fetchUser(id);
    }
  }

  renderPosts() {
    const { posts } = this.props;
    return (
      _.map(posts, post => {
        return (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        );
      })
    );
  }

  render() {
    const { user } = this.props;
    if (!user) return <div>searching for user ...</div>;
    return (
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <ul><PostList posts={this.props.posts} /></ul>
      </div>
    );
  }
}

function mapStateToProps({ users, posts }, ownProps) {
  const user = users[ownProps.match.params.id];

  const userposts = _.pickBy(posts, (key, value) => {
    return key.user_id === user.id;
  });

  return {
    user: user,
    posts: userposts
  };
}

export default connect(mapStateToProps, { fetchUser })(UsersShow);
// export default connect(mapStateToProps)(UsersShow);
