import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { TotalContext } from '../context/contextTotal.jsx';

export default function Navbar() {
  const { total } = useContext(TotalContext);

  const totalFormateado = total.toLocaleString('es-ES');

  return (
    <div id="navbar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
      <Link to="/pizzas"><button>Pizzas</button></Link>
      <Link to="/cart"><button>Cart</button></Link>
      <Link to="/cart">
        <button id="total">
          <p>El total de la compra es de: ${totalFormateado}</p>
        </button>
      </Link>
    </div>
  );
}