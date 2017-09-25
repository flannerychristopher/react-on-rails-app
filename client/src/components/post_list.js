import React from 'react';
import _ from 'lodash';

const PostList = props => {
  const postItems = _.map(props.posts, post => {
    return (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </li>
    );
  });

  return (
    <ul>
      {postItems}
    </ul>
  );
}

export default PostList;