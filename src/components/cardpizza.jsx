import pizzas from "../assets/Pizzas.js"


export default function cardPizza() {
  return (
    <div className="home">
            {
              pizzas.map(elementos => (
                <div className="pizza">
                 <h1>{elementos.name}</h1>
                 <img src={elementos.img}></img>
                 <p>INGREDIENTES </p>
                 <li>{elementos.ingredients.toString().replaceAll(",",",")}</li>
                 <p>${elementos.price}</p>
                 <button>Ver Mas </button>
                 <button>Añadir</button>
           </div>
              ))
            }
    </div>
  )
}