import React, { useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  let api = {
    key: '820b817bc39d52dac15c774cb4cd0fe1',
    url: 'https://api.openweathermap.org/data/2.5/weather',
  };

  let [search, setSearch] = useState('');
  let [weather, setWeather] = useState({});
  let [loading, setLoading] = useState(false);
  let [notFound, setNotFound] = useState(''); 
  let [error, setError] = useState('');     

  const fetchWeather = async () => {
    if (search === '') {
      setError('Please enter a city name');
      return;
    }
    setLoading(true);
    setNotFound('');
    setError('');

    try {
      const res = await fetch(`${api.url}?q=${search}&appid=${api.key}`);
      const data = await res.json();

      if (data.cod === '404') {
        setNotFound('City not found');
        setWeather({});
      } else {
        setWeather(data);
      }
    } catch (error) {
      setNotFound('Cannot find the mentioned Geographical Location');
    } finally {
      setLoading(false);
    }
  };

  let enterButton = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div id='app'>
      <h1>🌞 ⛅ ☔ around the 🌎</h1>
      <div className='weather'>
        <input
          type="text"
          id="search"
          placeholder="Search for any city..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={enterButton}
        />
        <input type="submit" value="search" id="submit" onClick={fetchWeather} />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {notFound && <p style={{ color: 'red' }}>{notFound}</p>}

      {weather.main && (
        <div id='weather-data' className='display'>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <h2>{weather.name}</h2>
          <p><strong>Temperature:</strong> {Math.round(weather.main.temp - 273.15)}°C</p>
          <p><strong>Description:</strong> {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
