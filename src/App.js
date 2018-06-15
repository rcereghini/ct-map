import React from 'react'
import './App.css'
import Welcome from './Welcome.js'
import Clock from './Clock.js'
import Toggle from './Toggle.js'
import Greeting from './Greeting.js'
import Map from './Map.js'

const events = [
  {
    title: 'Lunch and Learn',
    date: 'June 25th, 2018',
    time: '3:00PM - 5:00PM'
  },
  {
    title: 'Escrow Escape Room',
    date: 'July 6th, 2018',
    time: '11:00AM - 1:00PM'
  },
  {
    title: 'Disco Night',
    date: 'July 14th, 2018',
    time: '7:00PM - 11:00PM'
  },
  {
    title: 'Taco Tuesday',
    date: 'July 23rd, 2018',
    time: '12:00PM - 2:00PM'
  }
]


const App = () => {
  return(
  <div className='fullPage'>
    <div className='header'>
      <img alt='' src="http://www.cleartitleaz.com/wp-content/uploads/2016/01/logo.png" style={{height:'65px'}}/>
    </div>
    <div className='mapHolder'>
      <Map />
      <div className='eventContainer'>
        <div className='eventBox eventBox-top'><h2>{events[0].title}</h2><h3>{events[0].date}</h3><h3>{events[0].time}</h3></div>
        <div className='eventBox'><h2>{events[1].title}</h2><h3>{events[1].date}</h3><h3>{events[1].time}</h3></div>
        <div className='eventBox'><h2>{events[2].title}</h2><h3>{events[2].date}</h3><h3>{events[2].time}</h3></div>
        <div className='eventBox eventBox-bottom'><h2>{events[3].title}</h2><h3>{events[3].date}</h3><h3>{events[3].time}</h3></div>
      </div>
    </div>
    <Clock/>
  </div>
)}

export default App
