import React from 'react'
import './App.css'
import Welcome from './Welcome.js'
import Clock from './Clock.js'
import Toggle from './Toggle.js'
import Greeting from './Greeting.js'
import Map from './Map.js'

const user = {
  firstName: 'Robert',
  lastName: 'Cereghini'
}

const fullName = (user) => user.firstName + ' ' + user.lastName;

const App = () => {
  return(
  <div className='fullPage'>
    <div className='header'>
      <img alt='' src="https://cleartitleaz.files.wordpress.com/2013/08/cropped-banner-wp4.jpg" style={{height:'70px'}}/>
    </div>
    <div className='mapHolder'>
      <Map />
      <div className='eventContainer'>
        <div className='eventBox eventBox-top'><h3>Cooking with Casey</h3><p>June 25th, 2018</p><p>3:00PM - 5:00PM</p></div>
        <div className='eventBox'><h3>Taco Tuesday</h3><p>July 4th, 2018</p><p>1:00PM - 2:00PM</p></div>
        <div className='eventBox'><h3>Movie Monday</h3><p>July 10th, 2018</p><p>11:00AM - 5:00PM</p></div>
        <div className='eventBox eventBox-bottom'><h3>Escrow Escape Room</h3><p>July 23rd, 2018</p><p>10:00AM - 11:00AM</p></div>
      </div>
    </div>
    <Clock/>
  </div>
)}

export default App
