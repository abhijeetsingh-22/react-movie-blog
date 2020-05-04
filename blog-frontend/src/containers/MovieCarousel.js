import React from 'react';
import { connect } from 'react-redux';
import CarouseItem from '../component/CarouselItem';
import CarouselItem from '../component/CarouselItem';

const MovieCarousel = ({ movies }) => {
  let CarouselItems = [];

  CarouselItems = movies.filter((m) => m.imageUrl);
  CarouselItems = CarouselItems.map((m, i) => {
    return <CarouseItem imageUrl={m.imageUrl} active={i === 0} />;
  });
  console.log(CarouselItems);
  return (
    <div className="bd-example">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
        // style={{ maxHeight: '50vh' }}
      >
        {/* <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">{CarouselItems}</div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps, null)(MovieCarousel);
