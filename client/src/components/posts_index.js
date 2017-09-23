import React, { Component } from 'react';
import _ from 'lodash';

export default class PostsIndex extends Component {
  renderPosts() {
    // if (!this.props.posts) return <div>loading ...</div>
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <p>by: {this.props.users[post.user_id].name}</p>
          <p>{post.content}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="postsIndex">
        <h3>All Posts</h3>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}
