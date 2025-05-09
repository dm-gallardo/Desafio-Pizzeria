import React from 'react'

var total = 25000
var token = Boolean

const totalFormateado = total.toLocaleString('es-ES');


export default function navbar() {
  return (
    <div id='navbar'>
      <button>Home</button>
      <button>Profile{token}</button>
      <button>Logout{token}</button>
      <button>Login{token}</button>
      <button>Registger{token}</button>
      <button id='total'><p>El total de la compra es de: ${totalFormateado}</p>  </button>
    </div>
  )
}