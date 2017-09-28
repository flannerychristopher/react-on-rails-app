import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('/users');

  // return { type: 'FETCH_USERS', payload: request };

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_USERS', payload: data })
    });
  };
}

export function fetchUser(id) {
  const request = axios.get(`/users/${id}`);
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
      dispatch({ type: 'FETCH_POSTS', payload: data })
    });
  };
}

export function createPost(values, callback) {
  const request = axios.post('/posts');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'CREATE_POST', payload: data })
    });
  };
}