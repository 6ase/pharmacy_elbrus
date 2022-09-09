import React from 'react';
import Card from './pages/Card';

export default function Carousel({ allProducts }) {
  const getRandomInt = () => Math.floor(Math.random() * (allProducts.length));
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <h2>Товары недели специально для бабушек.</h2>

          <div className="carousel-item active d-flex">
            <Card product={allProducts[getRandomInt()]} />
            <Card product={allProducts[getRandomInt()]} />
            <Card product={allProducts[getRandomInt()]} />
          </div>

          <div className="carousel-item active d-flex">
            <Card product={allProducts[getRandomInt()]} />
            <Card product={allProducts[getRandomInt()]} />
            <Card product={allProducts[getRandomInt()]} />
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
