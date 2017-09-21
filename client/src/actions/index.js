import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('/users');

  return {
    type: 'FETCH_USERS',
    payload: request
  };  
}