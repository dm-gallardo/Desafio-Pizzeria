import { useParams} from 'react-router-dom';
import mapeoPizza from '../context/mapeoPizzas.jsx';
import { Link , NavLink } from 'react-router-dom';

export default function pizzaDesc() {

  const { pizzas } = mapeoPizza(); //llama la funcion del mapeo de pizzas
  const { id } = useParams(); // obtiene el id de la pizza seleccionada

  const pizzaSeleccionada = pizzas?.find(
    (pizza) => String(pizza.id) === String(id)
  );

  // Muestra un mensaje mientras carga o si no se encuentra
  if (!pizzaSeleccionada) {
    return <p>Cargando pizza o no encontrada...</p>;
  }

  return (
    <div className='pizzaDesc'>
      <div className="pizza">
        <h1>{pizzaSeleccionada.name}</h1>
        <img src={pizzaSeleccionada.img} alt={pizzaSeleccionada.name} />
        <p>{pizzaSeleccionada.desc}</p>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}