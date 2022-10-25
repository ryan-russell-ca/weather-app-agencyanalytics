const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();
const port = 8080;
const baseUrl = "https://api.openweathermap.org/data/3.0";

const corsOptions = {
  origin: process.env.HOST_ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors());

const forecastCache = {
  time: 0,
  payload: {},
};

app.get("/api/forecast", cors(corsOptions), (req, response) => {
  const { lat, lon } = req.query;

  if (forecastCache.time > new Date().getTime() - 600000) {
    response.status(200).send(forecastCache.payload);
    return;
  }

  https
    .get(
      `${baseUrl}/onecall?appid=${process.env.WEATHER_SECRET}&exclude=minutely,hourly,alerts&units=metric&lat=${lat}&lon=${lon}`,
      (res) => {
        let data = [];
        const headerDate =
          res.headers && res.headers.date
            ? res.headers.date
            : "no response date";

        res.on("data", (chunk) => {
          data.push(chunk);
        });

        res.on("end", () => {
          const payload = JSON.parse(Buffer.concat(data).toString());
          forecastCache.time = new Date().getTime();
          forecastCache.payload = payload;
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
