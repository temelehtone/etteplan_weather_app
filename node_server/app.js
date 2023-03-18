const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware.js");
const fetch = require("node-fetch");
require("express-async-errors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

const baseURL = "https://api.openweathermap.org/data/2.5/forecast?";

app.get("/getData/:lat&:lon", (req, res, next) => {
  fetch(
    `${baseURL}lat=${req.params.lat}&lon=${req.params.lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => next(err));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
