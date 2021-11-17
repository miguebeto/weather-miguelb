import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [cities, setCities] = useState([])
  function onSearch(ciudad){
    // llamado a la API externa ---> Dato
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
    .then(r => r.json())
    .then(recurso => {
      if(recurso.cod === '404'){
        alert('Ciudad No Encontrada');
      }else{
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon         
      }
     setCities(oldCities => [...oldCities, ciudad])
    }
    }) 
  }

  function onClose(idCity){
    setCities(oldCities => oldCities.filter(city => city.id !== idCity));
  }

 
  return (
	
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
