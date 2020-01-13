import React from 'react'
import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';


ReactDOM.render(
  <OpenWeatherMap city="Phoenix" country="AZ" appid="f4eefd3c18771e9e63d4f6dbb0d2c10c" />,
  document.getElementById('root')
)
