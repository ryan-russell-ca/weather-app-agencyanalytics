import "./ForecastCurrent.less";
import { ForecastCurrent as Forecast } from "../api/Fetch";
import icons from "../icons";

const ForecastCurrent = ({ forecast }: { forecast: Forecast }) => {
  const weatherCurrent = forecast.weather[0];

  return (
    <header className="weather-today">
      <h3 className="weather-today-title">Today</h3>
      <div className="weather-container">
        <div>
          <img
            alt="Clouds"
            className="weather-icon"
            src={weatherCurrent && icons[weatherCurrent.icon]}
          />
        </div>
        <div>
          <strong className="weather-today-degree">
            {forecast.temp.toFixed(0)}&deg;
          </strong>
          <div>{weatherCurrent?.description}</div>
        </div>
      </div>
    </header>
  );
};

export default ForecastCurrent;
