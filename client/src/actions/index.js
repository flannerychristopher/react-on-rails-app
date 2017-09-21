import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('/users');

  return {
    type: 'FETCH_USERS',
    payload: request
  };  
}

export function fetchUser(id) {
  const request = axios.get(`/users/${id}`);

  return {
    type: 'FETCH_USER',
    payload: request
  }
}