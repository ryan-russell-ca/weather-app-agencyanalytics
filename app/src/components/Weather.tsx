import React from "react";
import "./Weather.less";
import icon from "../icons/rainy-3.svg";
import WeatherDay from "./WeatherDay";

const Weather = () => {
  return (
    <div className="container-grid">
      <div className="weather-today">
        <h3 className="weather-today-title">Today</h3>
        <div className="weather-container">
          <div>
            <img alt="Clouds" className="weather-icon" src={icon} />
          </div>
          <div>
            <strong className="weather-today-degree">19&deg;</strong>
            <div>Clouds</div>
          </div>
        </div>
      </div>
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
      <WeatherDay />
    </div>
  );
};

export default Weather;
