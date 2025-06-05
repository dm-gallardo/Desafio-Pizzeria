import { useState, useEffect, useContext } from 'react';
import mapeoPizza from '../context/mapeoPizzas.jsx';
import { TotalContext } from '../context/contextTotal.jsx';
import { CartCountContext } from '../context/contextCantidad.jsx';

export default function Cart() {
  
  const { pizzas } = mapeoPizza();
  const { counts, addCount, lessCount, getCount } = useContext(CartCountContext);
  const { updateTotal } = useContext(TotalContext);

  const total = pizzas
    ? pizzas.reduce((acc, pizza) => acc + getCount(pizza.id) * pizza.price, 0)
    : 0;

  useEffect(() => {
    updateTotal(total);
  }, [counts, pizzas]);

  return (
    <div className="cartHome">
      {pizzas?.map((pizza) => (
        <div className="cart" key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} />
          <h1>{pizza.name}</h1>
          <p>Precio unitario: ${pizza.price}</p>
          <button onClick={() => addCount(pizza.id)}> + </button>
          <p>Cantidad: {getCount(pizza.id)}</p>
          <button onClick={() => lessCount(pizza.id)}> - </button>
        </div>
      ))}
      <div className="total">
        <h2>Total de la cuenta es: ${total}</h2>
      </div>
    </div>
  );
}