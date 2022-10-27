import "./ForecastDay.less";
import icons from "../icons";
import { ForecastDay as Forecast } from "../api/Fetch";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const ForecastDay = ({ forecast }: { forecast: Forecast }) => {
  return (
    <li className="weather-weekday">
      <h4 className="weather-weekday-title">
        {weekDays[new Date(forecast.dt * 1000).getDay()]}
      </h4>
      <img
        alt="Clouds"
        className="weather-icon"
        src={icons[forecast.weather[0].icon]}
      />
      <strong className="weather-weekday-degree">
        {forecast.temp.max.toFixed(0)}&deg;
      </strong>
    </li>
  );
};

export default ForecastDay;
