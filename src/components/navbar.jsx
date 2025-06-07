import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TotalContext } from '../context/contextTotal.jsx';
import TokenContext from '../context/token';
import { CartCountContext } from '../context/contextCantidad.jsx';

export default function Navbar() {
  
  const { total } = useContext(TotalContext);
  const { token, setToken } = useContext(TokenContext);
  const totalFormateado = total.toLocaleString('es-ES');
  const { resetCounts } = useContext(CartCountContext);
  const navigate = useNavigate();
  const activeStyle = ({ isActive }) => ({});

  const logout = () => {
  console.log('Logout: antes de resetCounts');
  resetCounts();
  console.log('Logout: después de resetCounts');
  setToken(false);
  setTimeout(() => {
    navigate('/');
  }, 50);
};

  return (
    <div id="navbar">
      {token ? (
        <>
          <NavLink to="/" style={activeStyle}><button>Pizzas</button></NavLink>
          <NavLink to="/cart" style={activeStyle}><button>Cart</button></NavLink>
          <NavLink to="/profile" style={activeStyle}><button>Profile</button></NavLink>
          <NavLink to="/cart" style={activeStyle}><button id="total"><p>El total de la compra es de: ${totalFormateado}</p></button></NavLink>
          <button style={{}}>Pagar</button>
          <button onClick={logout}>LogOut</button>
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