import { useState } from 'react'

export default function register() {

  const [usuario , setUsuario] = useState('');
  const [pass, setPass] = useState('');
  
  function handleUsuario(event) { 
    setUsuario(event.target.value)
  }

  function handlepass(event) {
    setPass(event.target.value)
  }

  function inicioSesion() {
    if(pass.length <= 6){
      alert('contraseña demasiado corta , debe tener al menos 6 caracteres')
    }else if(usuario === '' || pass === ''){
      alert('Todos los campos son obligatorios')
    }
    else
    alert('Bienvenido ' + usuario)
  
  }
  
  return (
    <div id='login'>
      <h1>Registro de Nuevo Usuario</h1>
      <label htmlFor="User">Usuario</label>
      <input type="text" onChange={handleUsuario} id='User' />
      <label htmlFor="Pass">Contraseña</label>
      <input type="password" onChange={handlepass} id="Pass"/>
      <button onClick={inicioSesion}>inicio de sesión</button>

      <div>
        <h1>Usuario: {usuario}</h1>
        <h1>Contraseña: {pass}</h1>
      </div>
    
    
    </div>
  )
} 