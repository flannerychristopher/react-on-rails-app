import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts } from './actions';

import PropsRoute from './components/props_route';

import UsersIndex from './components/users_index';
import { Route, Link } from 'react-router-dom';
import UsersShow from './components/users_show';
import PostsIndex from './components/posts_index';
import Welcome from './components/welcome';
import About from './components/about';
import Flanthedev from './components/flanthedev';


class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <UsersIndex users={this.props.users} />
        <div className="content">
          <nav>
            <Link to="/">Welcome Page</Link>
            <Link to="/posts">View All Posts</Link>
            <Link to="/about">About this App</Link>
            <Link to="/flanthedev">Made by flanthedev</Link>
          </nav>
          <h1>The React on Rails App</h1>
          <Route exact path="/" component={Welcome} />
          <PropsRoute path="/posts" component={PostsIndex} posts={this.props.posts} />
          <Route path="/about" component={About} />
          <Route path="/flanthedev" component={Flanthedev} />
          <Route path="/users/:id" component={UsersShow} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    users: state.users,
    posts: state.posts 
  };
}

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(App);
