const express = require("express");
const cors = require("cors");
const blogsRouter = require("./controllers/blogs.js");
const middleware = require("./utils/middleware.js");
require("express-async-errors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
