import React from 'react';

const CarouseItem = ({ imageUrl, active }) => {
  //   console.log(active);
  //   let cl = 'd-block w-100 ';
  //   active && (cl = cl + ' active');
  return (
    <div className={`carousel-item ${active && 'active'}`}>
      <a href="/">
        <img src={imageUrl} className="d-block w-100" alt="..." />
        {/* <div className="carousel-caption d-none d-md-block">
      <h5>First slide label</h5>
      <p>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </p>
    </div> */}
      </a>
    </div>
  );
};
export default CarouseItem;
