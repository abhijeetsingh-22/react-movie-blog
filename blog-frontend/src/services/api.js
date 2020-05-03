import axios from 'axios';
import { addError } from '../store/actions/error';

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err.response.data.error));
  });
}

export const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else delete axios.defaults.headers['Authorization'];
};
