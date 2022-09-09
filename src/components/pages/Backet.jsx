import React, { useState } from 'react';
import Cardinbasket from './Cardinbasket';

export default function Backet({ userBasket }) {
  const [productInBasket, setProductInBasket] = useState(userBasket || []);

  return (
    <div
      className="reg-container"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {productInBasket?.map((el) => <Cardinbasket key={el.Product.id} product={el.Product} />)}
      <div>
        <h2>
          {`Итого:${productInBasket?.reduce((sum, curr) => sum + curr.Product.price, 0)} ₽`}
          <button type="button" className="btn btn-outline-success">Оформить заказ</button>
        </h2>
      </div>

    </div>
  );
}
