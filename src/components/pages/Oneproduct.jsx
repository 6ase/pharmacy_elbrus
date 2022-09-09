import React from 'react';

export default function Oneproduct({ product }) {
  
  return (
    <div
      className="card mb-3 w-50 mx-auto"
      style={{ maxWidth: '540px', boxShadow: '4px 7px 6px 1px silver' }}
    >
      <div className="row g-0 ">
        <div className="col-md-3 ">
          <img src={`${product.img}`} className="img-fluid rounded-start img-thubnail" alt="таблеточка" />
        </div>
        <div
          className="col-md-8"
        >
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.desc}</p>
            <p className="card-text"><small className="text-muted" /></p>
            <div />
            <h5>{`Цена ${product.price} ₽`}</h5>
            <a href="#" className="btn btn-success">Купить</a>
          </div>
        </div>
      </div>
    </div>
  );
}
