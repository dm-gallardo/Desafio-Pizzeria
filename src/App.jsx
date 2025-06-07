import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Cart from './components/cart'
import Login from './components/login'
import Register from './components/register'
import Error404 from './components/error404'
import PizzaDesc from './components/pizzaDesc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContextJuntos from './context/contextjuntos.jsx'
import { TokenProvider } from './context/token.jsx'
import PrivateRoute from './context/PrivateRoute';
import PublicRoute from './context/PublicRoute';
import Profile from './components/profile.jsx'

function App() {
  return (
    <ContextJuntos>
      <TokenProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Ruta por defecto */}

            <Route path="/" element={<Home />}/>

            {/* Rutas públicas (acceso restringido si token=true) */}
            
            <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute>}/>
            <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>}/>
            <Route path="/:id" element={<PizzaDesc />} />

            {/* Ruta privada */}

            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />

            {/* Ruta de error */}

            <Route path="*" element={<Error404 />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </TokenProvider>
    </ContextJuntos>
  );
}

export default App
