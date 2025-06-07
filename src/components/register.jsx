import { useAuth } from '../context/UserContext.jsx';

export default function register() {
  
  const { email, password, token, setToken, handleEmail, handlePassword, handleRegister } = useAuth();


  
  return (
    <div id='login'>
      <h1>Registro de Nuevo Usuario</h1>
      <label htmlFor="User">Usuario</label>
      <input type="text" onChange={handleEmail} id='User' />
      <label htmlFor="Password">Contraseña</label>
      <input type="password" onChange={handlePassword} id="Password"/>
      <button onClick={handleRegister}>inicio de sesión</button>

      <div>
        <h1>Usuario: {email}</h1>
        <h1>Contraseña: {password}</h1>
      </div>
    
    
    </div>
  )
} 