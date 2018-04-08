import axios from 'axios';

export function signupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  };
}