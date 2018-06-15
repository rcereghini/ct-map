import React from 'react'
import './App.css'
import Welcome from './Welcome.js'
import Clock from './Clock.js'
import Toggle from './Toggle.js'
import Greeting from './Greeting.js'
import Map from './Map.js'
import Weather from './Weather.js'

const user = {
  firstName: 'Robert',
  lastName: 'Cereghini'
}

const fullName = (user) => user.firstName + ' ' + user.lastName;

const App = () => {
  return(
  <div className='fullPage'>
    <div className='header'>
      <img alt='' src="http://www.cleartitleaz.com/wp-content/uploads/2016/01/logo.png" style={{height:'80px'}}/>
    </div>
    <div className='mapHolder'>
      <Map />
    </div>
    <Clock/>
    <Weather/>
  </div>
)}

export default App
