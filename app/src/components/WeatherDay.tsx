import React from "react";
import "./WeatherDay.less";
import icon from "../icons/rainy-3.svg";

const WeatherDay = () => {
  return (
    <div className="weather-weekday">
      <h4 className="weather-weekday-title">Wed</h4>
      <img alt="Clouds" className="weather-icon" src={icon} />
      <strong className="weather-weekday-degree">18&deg;</strong>
    </div>
  );
};

export default WeatherDay;
