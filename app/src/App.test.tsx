import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import cities from "./cities";

jest.mock("./api/Fetch", () => ({
  getForecast: async (lat: number, lon: number) => {
    if (lat === 35.6762 && lon === 139.6503) {
      return require("./test/payloads").forecastAlt;
    }

    return require("./test/payloads").forecast;
  },
}));

describe("Renders components", () => {
  test("Renders App", async () => {
    render(<App />);

    expect(screen.getAllByRole("button")).toHaveLength(
      Object.keys(cities).length
    );

    const loaders = screen.getAllByRole("img");
    expect(loaders).toHaveLength(5);
    loaders.forEach((l) => {
      expect((l as HTMLImageElement).src).toContain("rings.svg");
    });

    await act(async () => {
      await new Promise(process.nextTick);
    });

    const icons = screen.getAllByRole("img");
    expect(icons).toHaveLength(5);
    expect((icons[0] as HTMLImageElement).src).toContain("04n.svg");
    expect((icons[1] as HTMLImageElement).src).toContain("10d.svg");
    expect((icons[2] as HTMLImageElement).src).toContain("01d.svg");
    expect((icons[3] as HTMLImageElement).src).toContain("04d.svg");
    expect((icons[4] as HTMLImageElement).src).toContain("10d.svg");
  });

  test("Clicking city makes new API call", async () => {
    render(<App />);

    await act(async () => {
      await new Promise(process.nextTick);
    });

    fireEvent(
      screen.getByText("Tokyo"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    await act(async () => {
      await new Promise(process.nextTick);
    });

    const icons = screen.getAllByRole("img");
    expect(icons).toHaveLength(5);
    expect((icons[0] as HTMLImageElement).src).toContain("02n.svg");
    expect((icons[1] as HTMLImageElement).src).toContain("02d.svg");
    expect((icons[2] as HTMLImageElement).src).toContain("01d.svg");
    expect((icons[3] as HTMLImageElement).src).toContain("04d.svg");
    expect((icons[4] as HTMLImageElement).src).toContain("03d.svg");
  });
});
