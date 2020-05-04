import React from 'react';
import { Link } from 'react-router-dom';

const CarouseItem = ({ imageUrl, active, movie_id }) => {
  return (
    <div className={`carousel-item ${active && 'active'}`}>
      <Link to={`/movies/${movie_id}`}>
        <img src={imageUrl} className="d-block w-100" alt="..." />
      </Link>
    </div>
  );
};
export default CarouseItem;
