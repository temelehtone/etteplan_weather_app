import { useEffect, useState } from 'react'
import './App.css'
import weatherService from './api'
import coordinates from './utils/coordinates'

function App() {
  

  useEffect(() => {
    
    weatherService.getWeatherData(coordinates.tampere.lat, coordinates.tampere.lon)
  }, [])
  return (
    <div className="App">
       
    </div>
  )
}

export default App
