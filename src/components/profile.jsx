import { Link } from 'react-router-dom';
import { useState } from 'react';

// const [usuario , setUsuario] = useState('');
// const [mail, setMail] = useState('');
const usuario = 'Usuario';
const mail = 'invento@nose.com';

export default function profile() {
  return (
    <div className='profile'>
      <h1>Profile Page</h1>
        <h2>Usuario: {usuario}</h2>
        <h2>Correo: {mail}</h2>
      <Link to='/'><button>Log Out</button></Link>
    </div>
  )
}