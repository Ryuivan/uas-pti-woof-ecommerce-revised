import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    Axios.get("http://api.openweathermap.org/data/2.5/weather?q=Tangerang&appid=b3ab7e87c8d95d8c88cadce9d3047f2c")
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div className="text-left">
      {weather && (
        <div>
          <p className='m-0'>
            <strong>Location: {weather.name}</strong>
          </p>
          <p className='m-0'>
            <strong>Temp: {kelvinToCelsius(weather.main.temp).toFixed(2)}°C</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;