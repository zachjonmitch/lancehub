import axios from 'axios';

export function userLoginRequest(userData) {
  return dispatch => {
    axios.post('/api/users', userData);
  };
}
