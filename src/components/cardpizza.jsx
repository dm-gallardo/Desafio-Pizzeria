import { useEffect , useState} from "react";
// import pizzas from "../assets/Pizzas.js"


export default function cardPizza() {

  const [pizzas , setPizzas] = useState(null);

  useEffect(() => {
    
    async function getData() {
    try{
      const response = await fetch('http://localhost:5000/api/pizzas')
      
      const respuesta = await response.json();
      setPizzas(respuesta); 
      return respuesta;
      
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }}

    getData();
  }, [])

  console.log(pizzas);


  return (
    <div className="home">
            {pizzas?.map(mapeo => (
              <div className="pizza">
                <h1>{mapeo.name}</h1>
                <img src={mapeo.img}></img>
                <p>INGREDIENTES </p>
                <li>{mapeo.ingredients.toString().replaceAll(",",",")}</li>
                <p>${mapeo.price}</p>
                <button>Ver Mas </button>
                <button>Añadir</button>
              </div>
            ))}
    </div>
  )
}