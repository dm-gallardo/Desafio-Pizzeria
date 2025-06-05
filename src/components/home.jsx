import Header from './header'
import Cardpizza from './cardpizza'
import { useState , useEffect , useContext } from 'react'
import pizzaCart from '../assets/PizzaCart.js';
import { TotalContext} from '../context/contextTotal.jsx';

export default function home() {
  return (
    <div className='home'>
      <Header/>
      <Cardpizza/>
    </div>
  )
}
