import React, { useState, useEffect } from 'react';
import Video from './Video';
import Card from './Card';
import Carousel from './Carousel';

export default function Products({ allProducts }) {
  const [products, setProducts] = useState(allProducts || []);

  return (
    <>
      <Video />
      <Carousel allProducts={allProducts} />
      <div className="row align-self-start">
        <h2>Список лекарств</h2>
        {products && products.map((el) => <Card key={el.id} product={el} />)}
      </div>
    </>
  );
}
