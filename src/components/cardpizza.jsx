import { useContext , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mapeoPizza from '../context/mapeoPizzas.jsx';
import TokenContext from '../context/token';
import { TotalContext } from '../context/contextTotal.jsx';
import { CartCountContext } from '../context/contextCantidad.jsx';
// se modifica cardpizza para que llame a funcion del mapeo de pizzas
// muestra las pizzas y sy descripcion en el home , para evitar el pedido sin el logueo
// pízzas tendra la funcion con los botones de añadir y ver más con sus respectivas funciones

export default function cardPizza() {

  const Navigate = useNavigate();
  const { counts, addCount, lessCount, getCount, resetCounts } = useContext(CartCountContext);
  const { updateTotal } = useContext(TotalContext);
  const { pizzas } = mapeoPizza(); //llama la funcion del mapeo de pizzas
  const { token, setToken } = useContext(TokenContext);

  const total = pizzas? pizzas.reduce((acc, pizza) => acc + getCount(pizza.id) * pizza.price, 0): 0;

  useEffect(() => {
    updateTotal(total);
  }, [counts, pizzas]);

  const movePage = (id) => {
    Navigate(`/${id}`); // redirige a la pagina de la pizza seleccionada
  }

    return (
    <div>
      {token ? (
            <>
              <div className="home">
                {pizzas?.map(pizza => (
                  <div className="pizza" key={pizza.id}>
                    <h1>{pizza.name}</h1>
                    <img src={pizza.img}></img>
                    <p>INGREDIENTES </p>
                    <li>{pizza.ingredients.toString().replaceAll(",",",")}</li>
                    <p>${pizza.price}</p>
                    <button onClick={() => movePage(pizza.id)}>Ver desc</button>
                    <button onClick={() => addCount(pizza.id)}>Añadir</button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="home" >
                {pizzas?.map(muestra => (
                  <div className="pizza" key={muestra.id}>
                    <h1>Pizza {muestra.name}</h1>
                    <img src={muestra.img}></img>
                    <p>Precio: ${muestra.price}</p>
                    <p>Haz click en el boton para ver la descripcion</p>
                    <button onClick={() => movePage(muestra.id)}>Descripcion</button>
                  </div>
                ))}
             </div>    
          )}
    </div>
  )
}