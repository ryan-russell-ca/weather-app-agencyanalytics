import { ForecastPayload } from "../api/Fetch";

export const forecast: ForecastPayload = {
  current: {
    dt: 1666827580,
    temp: 8.78,
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n",
      },
    ],
  },
  daily: [
    {
      dt: 1666850400,
      temp: {
        max: 9.86,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
    {
      dt: 1666936800,
      temp: {
        max: 6.86,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      dt: 1667023200,
      temp: {
        max: 13.87,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    },
    {
      dt: 1667109600,
      temp: {
        max: 11.57,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
    },
  ],
};

export const forecastAlt: ForecastPayload = {
  current: {
    dt: 1666964022,
    temp: 14.93,
    weather: [
      { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
    ],
  },
  daily: [
    {
      dt: 1666922400,
      temp: {
        max: 19.32,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
    },
    {
      dt: 1667008800,
      temp: {
        max: 21,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
    },
    {
      dt: 1667095200,
      temp: {
        max: 18.23,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
    },
    {
      dt: 1667181600,
      temp: {
        max: 19.12,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
    },
    {
      dt: 1667268000,
      temp: {
        max: 16.92,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
    },
    {
      dt: 1667354400,
      temp: {
        max: 20.62,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
    },
    {
      dt: 1667440800,
      temp: {
        max: 20.66,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
    },
    {
      dt: 1667527200,
      temp: {
        max: 18.67,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
    },
  ],
};
