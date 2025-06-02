import { Link } from 'react-router-dom';
var total = 25000
var token = Boolean

const totalFormateado = total.toLocaleString('es-ES');


export default function navbar() {
  return (
    <div id='navbar'>
      <Link to='/'><button>Home</button></Link>
      <Link to='/profile'><button>Profile</button></Link>
      <Link to='/login'><button>Login</button></Link>
      <Link to='/register'><button>Register</button></Link>
      <Link to='/cart'><button>Cart</button></Link>
      <Link to='/cart'><button id='total'><p>El total de la compra es de: ${totalFormateado}</p>  </button></Link>
    </div>
  )
}