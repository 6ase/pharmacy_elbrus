import React from 'react';

export default function Card({ product }) {
  // const onAdd = (e) => {
  //   e.preventDefault();
    
  // };
  return (
    <div
      className="card mb-3"
      style={{
        maxWidth: '540px', boxShadow: '11px 14px 9px 1px silver', borderColor: 'darkgreen', justifyContent: 'space-between',
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`${product.img}`} className="img-fluid rounded-start img-thubnail" alt="таблеточка" />
        </div>
        <div
          className="col-md-8"
        >
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text"><small className="text-muted" /></p>
            <div />
            <h5>Цена 0,00 ₽</h5>
            <button className="btn btn-success" >Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
