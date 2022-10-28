import icons from "../icons";

const baseUrl = "/api/forecast";

type Forecast = {
  description: string;
  icon: keyof typeof icons;
  id: number;
  main: string;
};

export type ForecastCurrent = {
  dt: number;
  temp: number;
  weather: Forecast[];
};

export type ForecastDay = {
  dt: number;
  temp: {
    max: number;
  };
  weather: Forecast[];
};

export type ForecastPayload = {
  current: ForecastCurrent;
  daily: ForecastDay[];
};

export const getForecast = async (
  lat: number,
  lng: number
): Promise<ForecastPayload> => {
  const request = await fetch(`${baseUrl}?lat=${lat}&lon=${lng}`);

  return request.json();
};
