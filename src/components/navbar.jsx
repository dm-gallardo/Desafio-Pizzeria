import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TotalContext } from '../context/contextTotal.jsx';
import { CartCountContext } from '../context/contextCantidad.jsx';
import { useAuth } from '../context/UserContext.jsx';

export default function Navbar() {
  
  const { total } = useContext(TotalContext);
  const { resetCounts } = useContext(CartCountContext);
  const { token, setToken, handleLogout } = useAuth();
  const totalFormateado = total.toLocaleString('es-ES');
  const navigate = useNavigate();
  const activeStyle = ({ isActive }) => ({});

  return (
    <div id="navbar">
      {token ? (
        <>
          <NavLink to="/" style={activeStyle}><button>Pizzas</button></NavLink>
          <NavLink to="/cart" style={activeStyle}><button>Cart</button></NavLink>
          <NavLink to="/profile" style={activeStyle}><button>Profile</button></NavLink>
          <NavLink to="/cart" style={activeStyle}><button id="total"><p>El total de la compra es de: ${totalFormateado}</p></button></NavLink>
          <button style={{}}>Pagar</button>
          <button onClick={() => handleLogout(resetCounts, navigate)}>LogOut</button>
        </>
      ) : (
        <>
          <NavLink to="/" style={activeStyle}><button>Home</button></NavLink>
          <NavLink to="/register" style={activeStyle}><button>Register</button></NavLink>
          <NavLink to="/login" style={activeStyle}> <button>Login</button></NavLink>
          <button id="total">
            <p>El total de la compra es de: ${totalFormateado}</p>
          </button>
        </>
      )}
    </div>
  );
}