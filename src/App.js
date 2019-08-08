import React from 'react';
import './App.css';
import Search from './components/search';
import WeatherCard from './components/weather-card';
import Map from './components/map';

function App() {
  return (
    <div className="container">
      <h1>Weather Finder</h1>
      <hr />
      <div className="row">
        <div class="row">
          <div class="col">
            <Search></Search>
          </div>
          <div class="w-100"></div>
          <div class="col">
            <WeatherCard></WeatherCard></div>
          <div class="col">
            <Map></Map>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
