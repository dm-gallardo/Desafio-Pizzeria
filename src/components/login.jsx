import { useAuth } from '../context/UserContext.jsx';

export default function Login() {
  
  const { email, password, token, setToken, handleEmail, handlePassword, handleLogin } = useAuth();

  return (
    <div id='login'>
      <label htmlFor="User">Usuario</label>
      <input type="text" onChange={handleEmail} id='User' />
      
      <label htmlFor="Password">Contraseña</label>
      <input type="Password" onChange={handlePassword} id="Pass"/>

      <button onClick={handleLogin}>Inicio de sesión</button>

      <div>
        <h1>Está hardcodeado para que sea</h1>
        <h2>Usuario: test@test.com</h2>
        <h2>Contraseña: 123123</h2>
      </div>
    </div>
  );
}