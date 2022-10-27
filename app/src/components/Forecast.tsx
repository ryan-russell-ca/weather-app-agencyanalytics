import "./Forecast.less";
import ForecastDay from "./ForecastDay";
import { ForecastPayload } from "../api/Fetch";
import ForecastCurrent from "./ForecastCurrent";
import ForecastCities from "./ForecastCities";
import Loader from "./Loader";

const Forecast = ({
  forecast,
  activeCity,
  cities,
  onCityChange,
}: {
  forecast?: ForecastPayload;
  activeCity: [key: string, coords: number[]];
  cities: [key: string, coords: number[]][];
  onCityChange: (city: [key: string, coords: number[]]) => void;
}) => {
  const forecastCurrent = forecast?.current;
  const weatherCurrent = forecastCurrent?.weather[0];
  const dailyForecast = forecast?.daily;
  
  return (
    <>
      <ForecastCities
        activeCityName={activeCity[0]}
        cities={cities}
        onCityClick={onCityChange}
      />
      <div className="container-grid">
        <div className="container-grid-header">
          {weatherCurrent ? (
            <ForecastCurrent forecast={forecastCurrent} />
          ) : (
            <Loader />
          )}
        </div>

        {dailyForecast ? (
          dailyForecast.map((dForecast) => {
            return (
              <ul key={dForecast.dt} className="container-grid-cell">
                <ForecastDay forecast={dForecast} />
              </ul>
            );
          })
        ) : (
          <>
            <li className="container-grid-cell">
              <Loader />
            </li>
            <li className="container-grid-cell">
              <Loader />
            </li>
            <li className="container-grid-cell">
              <Loader />
            </li>
            <li className="container-grid-cell">
              <Loader />
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default Forecast;
