import {
  LOAD_MESSAGES,
  REMOVE_MESSAGE,
  LOAD_MOVIES,
  REMOVE_MOVIE,
} from '../actionTypes';
import { apiCall } from '../../services/api';
import { addError } from './error';

export const loadMovies = (movies) => {
  return { type: LOAD_MOVIES, movies };
};

export const removeMovie = (id) => {
  return {
    type: REMOVE_MOVIE,
    id,
  };
};

export const deleteMovie = (user_id, movie_id) => {
  return (dispatch) => {
    console.log('delete message', user_id, 'movie id', movie_id);
    return apiCall('delete', `/api/users/${user_id}/movies/${movie_id}`)
      .then((res) => {
        dispatch(removeMovie(movie_id));
      })
      .catch((err) => dispatch(addError(err.message)));
  };
};

export const fetchMovies = () => {
  return (dispatch) => {
    apiCall('get', '/api/movies')
      .then((res) => {
        dispatch(loadMovies(res));
      })
      .catch((err) => dispatch(addError(err.message)));
  };
};
export const postNewMovie = (movieData) => (dispatch, getState) => {
  let { id } = getState().currentUser.user;
  return new Promise((resolve, reject) => {
    return apiCall('post', `/api/users/${id}/movies`, movieData)
      .then((res) => {
        resolve();
      })
      .catch((err) => {
        dispatch(addError(err.message));
        reject();
      });
  });
};
