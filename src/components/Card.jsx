import React from 'react';
import { Link } from 'react-router-dom';

export default function Oneproduct({ product }) {
  const addBacket = async () => {
    const param = product?.id;

    await fetch('/api/v1/backet', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ id: param }),
    });
  };

  return (
    <div
      className="card mb-3 mx-2"
      style={{ maxWidth: '540px', boxShadow: '4px 7px 6px 1px silver' }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`${product?.img}`} className="img-fluid rounded-start img-thubnail" alt="таблеточка" />
        </div>
        <div
          className="col-md-8"
        >
          <div className="card-body">
            <h5 className="card-title">{product?.title}</h5>
            <p className="card-text"><small className="text-muted" /></p>
            <div />
            <h5>{`Цена: ${product?.price} ₽`}</h5>
            <button type="submit" className="btn btn-outline-success" onClick={addBacket}>В корзину</button>
            {/* <Link to={`/products/${product?.id}`} style={{ marginLeft: '5rem' }} className="btn btn-outline-info">Подробнее</Link> */}
            <a href={`/products/${product?.id}`} style={{ marginLeft: '5rem' }} className="btn btn-outline-info">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
}
