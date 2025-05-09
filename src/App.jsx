import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Login from './components/login'

function App() {

  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <Navbar />
        <Login />
        {/* <Home /> */}
        <Footer />
      </div>
    </>
  )
}

export default App
