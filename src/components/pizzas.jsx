import mapeoPizza from '../context/mapeoPizzas.jsx';
import { useState, useEffect, useContext } from 'react';
import { TotalContext } from '../context/contextTotal.jsx';
import { CartCountContext } from '../context/contextCantidad.jsx';
// se modifica cardpizza para que llame a funcion del mapeo de pizzas
// cardPizza.jsx se usara para añadir el boton de añadir y ver mas con sus respectivas funciones


export default function cardPizza() {

  const { pizzas } = mapeoPizza(); //llama la funcion del mapeo de pizzas
  const { counts, addCount, lessCount, getCount } = useContext(CartCountContext);
    const { updateTotal } = useContext(TotalContext);
  
    const total = pizzas
      ? pizzas.reduce((acc, pizza) => acc + getCount(pizza.id) * pizza.price, 0)
      : 0;
  
    useEffect(() => {
      updateTotal(total);
    }, [counts, pizzas]);

  return (
    <div className="home">
            {pizzas?.map(pizza => (
              <div className="pizza">
                <h1>{pizza.name}</h1>
                <img src={pizza.img}></img>
                <p>INGREDIENTES </p>
                <li>{pizza.ingredients.toString().replaceAll(",",",")}</li>
                <p>${pizza.price}</p>
                <button>Ver Mas </button>
                <button onClick={() => addCount(pizza.id)}>Añadir</button>
              </div>
            ))}
    </div>
  )
}
