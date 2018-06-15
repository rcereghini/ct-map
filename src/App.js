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
      <img alt='' src="https://cleartitleaz.files.wordpress.com/2013/08/cropped-banner-wp4.jpg" style={{height:'75px'}}/>
    </div>
    <div className='mapHolder'>
      <Map />
      <div className='eventContainer'>
        <div className='eventBox eventBox-top'><h3>{events[0].title}</h3><p>{events[0].date}</p><p>{events[0].time}</p></div>
        <div className='eventBox'><h3>{events[1].title}</h3><p>{events[1].date}</p><p>{events[1].time}</p></div>
        <div className='eventBox'><h3>{events[2].title}</h3><p>{events[2].date}</p><p>{events[2].time}</p></div>
        <div className='eventBox eventBox-bottom'><h3>{events[3].title}</h3><p>{events[3].date}</p><p>{events[3].time}</p></div>
      </div>
    </div>
    <Clock/>
  </div>
)}

export default App
