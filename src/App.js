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
        <div className="col">
          <Search></Search>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <WeatherCard></WeatherCard>
        </div>
      </div>
    </div>
  );
}

export default App;
