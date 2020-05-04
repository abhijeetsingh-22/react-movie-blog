import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({
  title,
  imageUrl,
  plot,
  deleteMovie,
  _id,
  isCorrectUser,
}) => {
  return (
    <div className=" col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <div className="card bg-light border-light h-100">
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${plot.substring(0, 70)}...`}</p>
        </div>
        <div className="card-footer bg-light border-light d-flex justify-content-strech ">
          {/* <div className="d-flex justify-content-between"> */}
          <Link
            to={`/movies/${_id}`}
            className="btn btn-primary flex-fill mx-1"
          >
            Show More
          </Link>

          {isCorrectUser && (
            <button
              className="btn btn-danger flex-fill mx-1"
              onClick={deleteMovie}
            >
              Delete
            </button>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
