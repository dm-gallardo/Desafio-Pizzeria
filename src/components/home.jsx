import React from 'react'
import Header from './header'
import Napolitana from './napolitana'
import Pepperoni from './pepperoni'
import Espanola from './espanola'

export default function home() {
  return (
    <div id='home'>
      <Header/>
      <Napolitana/>
      <Pepperoni/>
      <Espanola/>
    </div>
  )
}
