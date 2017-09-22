import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('/users');

  // vanilla redux returns an object
  // return {
  //   type: 'FETCH_USERS',
  //   payload: request
  // };

  // redux thunk
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_USERS', payload: data })
    });
  };
}

export function fetchUser(id) {
  const request = axios.get(`/users/${id}`);

  // return {
  //   type: 'FETCH_USER',
  //   payload: request
  // }
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_USER', payload: data })
    });
  };
}

export function fetchPosts() {
  const request = axios.get('/posts');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_POSTS', payload: data})
    });
  };
}