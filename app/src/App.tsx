import React from "react";
import "./App.less";
import { getWeather } from "./api/Fetch";
import Weather from "./components/Weather";

const get = async () => {
  console.log(await getWeather());
};

const App = () => {
  get();
  return (
    <div className="container">
      <Weather />
    </div>
  );
}

export default App;
