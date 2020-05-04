import React from 'react';
import MovieList from '../containers/MovieList';
import MovieCarousel from '../containers/MovieCarousel';

const Homepage = () => {
  return (
    <>
      <MovieCarousel />
      <div className="container mt-5">
        <h2 className="mb-3 movieHeading">Recent Movies</h2>
        <MovieList />
      </div>
    </>
  );
};

export default Homepage;
