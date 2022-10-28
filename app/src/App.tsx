import "./App.less";
import { useCallback, useEffect, useState } from "react";
import { ForecastPayload, getForecast } from "./api/Fetch";
import Forecast from "./components/Forecast";
import cityCoordinates from "./cities";

const App = () => {
  const mappedCities = Object.entries(cityCoordinates);

  const [forecast, setForecast] = useState<ForecastPayload>();
  const [activeCity, setActiveCity] = useState<[key: string, coords: number[]]>(
    mappedCities[0]
  );
    
  const [, [lat, lng]] = activeCity;

  useEffect(() => {
    setForecast(undefined);

    (async () => {
      const payload = await getForecast(lat, lng);
      setForecast({
        ...payload,
        daily: payload.daily.slice(0, 4),
      });
    })();
  }, [activeCity, lat, lng]);

  const handleCityChange = useCallback(
    (city: [key: string, coords: number[]]) => {
      setActiveCity(city);
    },
    []
  );

  return (
    <div className="container">
      <Forecast
        activeCity={activeCity}
        cities={mappedCities}
        onCityChange={handleCityChange}
        forecast={forecast}
      />
    </div>
  );
};

export default App;
