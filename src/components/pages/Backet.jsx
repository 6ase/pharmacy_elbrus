import React, { useState } from 'react';
import Cardinbasket from './Cardinbasket';

export default function Backet({ userBasket }) {
  const [productInBasket, setProductInBasket] = useState(userBasket || []);

  return (
    <>
      <div>
        {productInBasket?.map((el) => <Cardinbasket key={el.Product.id} product={el.Product} />)}
      </div>
      <div>
        <h2>
          {`Итого:${productInBasket?.reduce((sum, curr) => sum + curr.Product.price, 0)} ₽`}
          <button type="button" className="btn btn-outline-success">Оформить заказ</button>
        </h2>
      </div>

    </>
  );
}
