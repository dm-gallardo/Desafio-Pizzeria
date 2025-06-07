import { useState } from 'react'
import TokenContext from '../context/token';
import { useContext } from 'react';

export default function login() {

  const [usuario , setUsuario] = useState('');
  const [pass, setPass] = useState('');
  const { token, setToken } = useContext(TokenContext);

  function handleUsuario(event) { 
    setUsuario(event.target.value)
  }

  function handlepass(event) {
    setPass(event.target.value)
  }

  function inicioSesion() {
    if(pass === 'admin' || usuario === 'admin'){
      alert('usuario correcto')
      setToken(true)
    }
    else
    alert('Usuario o contraseña incorrectos')
  
  }
  
  return (
    <div id='login'>
      <label htmlFor="User">Usuario</label>
      <input type="text" onChange={handleUsuario} id='User' />
      <label htmlFor="Pass">Contraseña</label>
      <input type="password" onChange={handlepass} id="Pass"/>
      <button onClick={inicioSesion}>inicio de sesión</button>

      <div>
        <h1>esta hardcodeado para que sea</h1>
        <h2>usuario: admin</h2>
        <h2>contraseña: admin</h2>
      </div>
    
    
    </div>
  )
} 