import React from 'react';

export default function Oneproduct({ product }) {
  return (
    // <div className="card" style={{ width: '18rem' }}>
    //   <img src={`${product.img}`} className="card-img-top" alt="таблеточка" />
    //   <div className="card-body">
    //     <h5 className="card-title">{product.title}</h5>
    //     <p className="card-text">{product.desc}</p>
    //   </div>
    //   <ul className="list-group list-group-flush">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //   </ul>
    //   <div className="card-body">
    //     <a href="#" className="btn btn-primary">Купить</a>
    //   </div>
    // </div>
    <div
      className="card mb-3"
      style={{ maxWidth: '540px', boxShadow: '11px 14px 9px 1px silver', borderColor: 'darkgreen' }}
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
