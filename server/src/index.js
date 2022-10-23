const express = require("express");
const http = require("http");

const app = express();
const port = 8080;
const baseUrl = "http://api.weatherapi.com/v1/current.json";

app.get("/api/current", (req, response) => {
  const { q } = req.query;

  http
    .get(`${baseUrl}?key=${process.env.WEATHER_SECRET}&q=${q}`, (res) => {
      let data = [];
      const headerDate =
        res.headers && res.headers.date ? res.headers.date : "no response date";

      res.on("data", (chunk) => {
        data.push(chunk);
      });

      res.on("end", () => {
        const user = JSON.parse(Buffer.concat(data).toString());
        response.status(res.statusCode).send(user);
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
