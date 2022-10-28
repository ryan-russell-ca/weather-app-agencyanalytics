const express = require("express");
const cors = require("cors");
const https = require("https");
const path = require("path");
const compression = require("compression");

const app = express();
const port = 8080;
const baseUrl = "https://api.openweathermap.org/data/3.0";

const corsOptions = {
  origin: process.env.HOST_ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors());

app.use(compression());

const forecastCache = {};

app.use("/", express.static(path.join(__dirname, "../build")));

app.get("/api/forecast", cors(corsOptions), (req, response) => {
  const { lat, lon } = req.query;

  const cacheKey = lat + "-" + lon;
  const cache = forecastCache[cacheKey];

  if (cache && cache.time > new Date().getTime() - 600000) {
    response.status(200).send(cache.payload);

    return;
  }

  https
    .get(
      `${baseUrl}/onecall?appid=${process.env.WEATHER_SECRET}&exclude=minutely,hourly,alerts&units=metric&lat=${lat}&lon=${lon}`,
      (res) => {
        let data = [];

        res.on("data", (chunk) => {
          data.push(chunk);
        });

        res.on("end", () => {
          const payload = JSON.parse(Buffer.concat(data).toString());
          forecastCache[cacheKey] = {};
          forecastCache[cacheKey].time = new Date().getTime();
          forecastCache[cacheKey].payload = payload;
          console.log("Updated forecast!");

          response.status(res.statusCode).send(payload);
        });
      }
    )
    .on("error", (err) => {
      console.error("Error: ", err.message);
    });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
