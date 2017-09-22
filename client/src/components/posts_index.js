import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (!this.props.posts) return <div>loading ...</div>
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <span>{post.author}</span>
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

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
