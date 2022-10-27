import { render, screen, within } from "@testing-library/react";
import { ForecastPayload } from "../api/Fetch";
import cityCoordinates from "../cities";
import Forecast from "./Forecast";

const forecast: ForecastPayload = {
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
const activeCity: [key: string, coords: number[]] = [
  "Ottawa",
  [45.4215, 75.6972],
];
const cities = Object.entries(cityCoordinates);

describe("Renders components", () => {
  test("Cities selection", () => {
    render(
      <Forecast
        cities={cities}
        forecast={forecast}
        activeCity={activeCity}
        onCityChange={() => {}}
      />
    );
    Object.keys(cityCoordinates).forEach((key) => {
      expect(screen.getByText(key)).toBeInTheDocument();
    });
  });

  test("Current weather", () => {
    render(
      <Forecast
        cities={cities}
        forecast={forecast}
        activeCity={activeCity}
        onCityChange={() => {}}
      />
    );
    const weekdayComponents = within(screen.getByRole("banner"));

    expect(weekdayComponents.getByText(/Today/)).toBeInTheDocument();
    expect(weekdayComponents.getByText(/9°/)).toBeInTheDocument();
    expect(weekdayComponents.getByText(/overcast clouds/)).toBeInTheDocument();
    expect(weekdayComponents.getByRole<HTMLImageElement>("img").src).toEqual(
      "http://localhost/04n.svg"
    );
  });

  test("Forecasted weather", () => {
    render(
      <Forecast
        cities={cities}
        forecast={forecast}
        activeCity={activeCity}
        onCityChange={() => {}}
      />
    );
    const weekdayComponents = screen.getAllByRole("listitem");

    const one = within(weekdayComponents[0]);
    expect(one.getByText(/Thu/)).toBeInTheDocument();
    expect(one.getByText(/10°/)).toBeInTheDocument();
    expect(one.getByRole<HTMLImageElement>("img").src).toEqual(
      "http://localhost/10d.svg"
    );

    const two = within(weekdayComponents[1]);
    expect(two.getByText(/Fri/)).toBeInTheDocument();
    expect(two.getByText(/7°/)).toBeInTheDocument();
    expect(two.getByRole<HTMLImageElement>("img").src).toEqual(
      "http://localhost/01d.svg"
    );

    const three = within(weekdayComponents[2]);
    expect(three.getByText(/Sat/)).toBeInTheDocument();
    expect(three.getByText(/14°/)).toBeInTheDocument();
    expect(three.getByRole<HTMLImageElement>("img").src).toEqual(
      "http://localhost/04d.svg"
    );

    const four = within(weekdayComponents[3]);
    expect(four.getByText(/Sun/)).toBeInTheDocument();
    expect(four.getByText(/12°/)).toBeInTheDocument();
    expect(four.getByRole<HTMLImageElement>("img").src).toEqual(
      "http://localhost/10d.svg"
    );
  });
});
