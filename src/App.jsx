import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Cart from './components/cart'
import Login from './components/login'
import Register from './components/register'
import Error404 from './components/error404'
import Profile from './components/Profile' 
import AllPizzas from './components/pizzas'
import { Route , Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/pizza/p001' element={<AllPizzas />} />
          <Route path='/profile' element={<Profile />} />  
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
