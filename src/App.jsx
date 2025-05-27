import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Cart from './components/cart'

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Home/>
        {/* <Cart/> */}
        <Footer />
      </div>
    </>
  )
}

export default App
