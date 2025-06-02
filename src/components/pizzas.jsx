import testeo from "../assets/mapeoPizzas";

export default function allPizzas() {
  const {pizzas} = testeo();

  return (
    <div className="home">
            {pizzas?.map(mapeo => (
              <div className="pizza">
                <h1>{mapeo.name}</h1>
                <img src={mapeo.img}></img>
                <p>INGREDIENTES </p>
                <li>{mapeo.ingredients.toString().replaceAll(",",",")}</li>
                <h3>{mapeo.desc}</h3>
                <p>${mapeo.price}</p>

              </div>
            ))}
    </div>
  )

}

