import React from 'react';
import MovieList from '../containers/MovieList';
import MovieCarousel from '../containers/MovieCarousel';

const Homepage = () => {
  return (
    <>
      <MovieCarousel />
      <MovieList />
    </>
  );
};

export default Homepage;
