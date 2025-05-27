
import { useState } from 'react'
import pizzaCart from '../assets/PizzaCart.js';


export default function cart() {
    
    const [cartItems, setCartItems] = useState(
    pizzaCart.map((item) => ({ ...item }))
    );

    
    const add = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].count += 1;
    setCartItems(updatedCart);
    };

    
    const less = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].count = Math.max(updatedCart[index].count - 1, 0);
    setCartItems(updatedCart);
    };

    const total = cartItems.reduce((acc, item) => acc + item.count * item.price, 0);
    
    return (
    <div className="cartHome">
      {cartItems.map((item, index) => (
        <div className="cart" key={item.id}>
          <img src={item.img} alt={item.name} />
          <h1>{item.name}</h1>
          <p>Precio unitario: ${item.price}</p>
          <button onClick={() => add(index)}> + </button>
          <p>Cantidad: {item.count}</p>
          <button onClick={() => less(index)}> - </button>
        </div>
      ))}
      <div className="total">
        <h2>Total de la cuenta es: ${total}</h2>
      </div>
    </div>
  );
}
