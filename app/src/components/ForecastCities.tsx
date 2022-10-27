import "./ForecastCities.less";

const ForecastCities = ({
  activeCityName,
  cities,
  onCityClick,
}: {
  activeCityName: string;
  cities: [key: string, coords: number[]][];
  onCityClick: (city: [key: string, coords: number[]]) => void;
}) => {
  return (
    <div className="container-cities">
      {cities.map(([name, coords]) => {
        return (
          <button
            key={name}
            className={activeCityName === name ? "active-city" : ""}
            onClick={() => onCityClick([name, coords])}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default ForecastCities;
