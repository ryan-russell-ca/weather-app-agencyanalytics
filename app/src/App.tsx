import React from "react";
import "./App.less";
import icon from "./icons/rainy-3.svg";

function App() {
  return (
    <div className="container">
      <header></header>
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
        <div className="weather-weekday">
          <h4 className="weather-weekday-title">Wed</h4>
          <img alt="Clouds" className="weather-icon" src={icon} />
          <strong className="weather-weekday-degree">18&deg;</strong>
        </div>
        <div className="weather-weekday">
          <h4 className="weather-weekday-title">Thu</h4>
          <img alt="Clouds" className="weather-icon" src={icon} />
          <strong className="weather-weekday-degree">18&deg;</strong>
        </div>
        <div className="weather-weekday">
          <h4 className="weather-weekday-title">Fri</h4>
          <img alt="Clouds" className="weather-icon" src={icon} />
          <strong className="weather-weekday-degree">18&deg;</strong>
        </div>
        <div className="weather-weekday">
          <h4 className="weather-weekday-title">Sat</h4>
          <img alt="Clouds" className="weather-icon" src={icon} />
          <strong className="weather-weekday-degree">18&deg;</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
