import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({ title, imageUrl, plot, deleteMovie, _id }) => {
  return (
    <div className="col-sm-3 mb-3">
      <div className="card">
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${plot.substring(0, 70)}...`}</p>
          <div className="d-flex justify-content-around">
            <Link to={`/moveis/${_id}`} className="btn btn-primary">
              Show More
            </Link>
            <button className="btn btn-danger" onClick={deleteMovie}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
