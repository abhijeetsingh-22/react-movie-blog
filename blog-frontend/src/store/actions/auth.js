import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './error';

export function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, user };
}

export function logout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(setCurrentUser({}));
    setToken(false);
  };
}
export function setToken(token) {
  setTokenHeader(token);
}

export function authUser(type, userData) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          setToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());

          resolve();
        })
        .catch((err) => {
          // console.log('from auth action creator', err);
          dispatch(addError(err.message));

          reject();
        });
    });
  };
}
