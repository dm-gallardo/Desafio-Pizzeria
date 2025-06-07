import { useContext } from 'react';
import { useNavigate , NavLink } from 'react-router-dom';
import { TotalContext } from '../context/contextTotal.jsx';
import TokenContext from '../context/token';
import { CartCountContext } from '../context/contextCantidad.jsx';

export default function Profile() {
  const activeStyle = ({ isActive }) => ({});
  const { total } = useContext(TotalContext);
  const { token, setToken } = useContext(TokenContext);
  const { resetCounts } = useContext(CartCountContext);
  const navigate = useNavigate();

  const usuario = 'Usuario';
  const mail = 'invento@nose.com';

  return (
    <div className='profile'>
      <h1>Profile Page</h1>
      <h2>Usuario: {usuario}</h2>
      <h2>Correo: {mail}</h2>
      <link></link>
      <NavLink to="/" style={activeStyle}><button onClick={() => {setToken(false);resetCounts();console.log(token);}}>LogOut</button></NavLink>
    </div>
  );
}