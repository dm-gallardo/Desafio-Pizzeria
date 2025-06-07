import { NavLink, useNavigate } from 'react-router-dom';
import { use, useContext , useEffect} from 'react';
import { TotalContext } from '../context/contextTotal.jsx';
import { CartCountContext } from '../context/contextCantidad.jsx';
import { useAuth } from '../context/UserContext.jsx';

export default function Profile() {
  const { total } = useContext(TotalContext);
  const { resetCounts } = useContext(CartCountContext);
  const { token, email, setToken, handleLogout, fetchUserProfile} = useAuth();
  const navigate = useNavigate();
  const activeStyle = ({ isActive }) => ({});
  const logged_user = JSON.parse(localStorage.getItem("logged_user"))

  return (
    <div className='profile'>
      <h1>Profile Page</h1>
      <h2>Bienvenido</h2>
      <h2>Usuario: {logged_user.email}</h2>
      <link></link>
      <button onClick={() => handleLogout(resetCounts, navigate)}>LogOut</button>
    </div>
  );
}