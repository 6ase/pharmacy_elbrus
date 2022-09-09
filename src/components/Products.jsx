import React, { useState, useEffect } from 'react';
import Video from './Video';
import Card from './Card';
import Carousel from './Carousel';

export default function Products({ allProducts, search }) {
  return (
    <>
      <Video />
      <Carousel allProducts={allProducts} />
      <div className="row align-self-start">
        <h2>Список лекарств</h2>
        {allProducts && !search && allProducts?.map((el) => <Card key={el.id} product={el} />)}

        {allProducts && search && allProducts?.filter(((el) => el.title.includes(search)))
          .map((el) => <Card key={el.id} product={el} />)}
      </div>
    </>
  );
}
