import mapeoPizza from '../context/mapeoPizzas.jsx';

// se modifica cardpizza para que llame a funcion del mapeo de pizzas
// muestra las pizzas y sy descripcion en el home , para evitar el pedido sin el logueo
// pízzas tendra la funcion con los botones de añadir y ver más con sus respectivas funciones

export default function cardPizza() {

  const { pizzas } = mapeoPizza(); //llama la funcion del mapeo de pizzas

  return (
    <div className="home">
            {pizzas?.map(muestra => (
              <div className="pizza">
                <h1>{muestra.name}</h1>
                <img src={muestra.img}></img>
                <p>{muestra.desc}</p>
              </div>
            ))}
    </div>
  )
}