import { REMOVE_ERROR, LOAD_MOVIES, REMOVE_MOVIE } from '../actionTypes';

export default function movies(state = [], action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return [...action.movies];
    case REMOVE_MOVIE: {
      let newstate = state.filter((m) => m._id != action.id);
      console.log(newstate);
      return newstate;
    }
    default:
      return state;
  }
}
