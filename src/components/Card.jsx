import React from 'react';

export default function Card() {
  return (
    <div className="card mb-3" style={{ maxWidth: '50px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://gls.store/upload/resize_cache/iblock/954/450_450_140cd750bba9870f18aada2478b24840a/a1bf635a-2d83-11eb-ba8c-000c292ea74f_91ecb73f-6ae3-11eb-ba96-000c292ea74f.jpg"
            className="img-fluid rounded-start"
            alt="кагоцел"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">КАГОЦЕЛ</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
