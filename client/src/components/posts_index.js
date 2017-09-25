import React, { Component } from 'react';
import _ from 'lodash';

import PostList from './post_list';

export default class PostsIndex extends Component {
  render() {
    return (
      <div className="postsIndex">
        <h3>All Posts</h3>
        <ul><PostList posts={this.props.posts} ysers={this.props.users} /></ul>
      </div>
    );
  }
}
