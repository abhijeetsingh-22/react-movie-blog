import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../component/MovieCard';
import { fetchMovies, deleteMovie } from '../store/actions/movies';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    let movieCards = this.props.movies.map((m) => {
      return (
        <MovieCard
          {...m}
          deleteMovie={this.props.deleteMovie.bind(this, m.user._id, m._id)}
          isCorrectUser={this.props.currentUser.user.id === m.user._id}
        />
      );
    });
    return <div className="row ">{movieCards}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(
  MovieList
);
