import React, { useState, useEffect } from 'react';
import Card from './Card';
import Video from './Video';

export default function Products({ allProducts }) {
  const [products, setProducts] = useState(allProducts || []);

  return (
    <>
      <Video />
      <div className="row align-self-start">
        <h2>Список лекарств</h2>
        {products && products.map((el) => <Card key={el.id} product={el} />)}
      </div>
    </>
  );
}
