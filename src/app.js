if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");

// Enables CORS (cross origin resource sharing) across entire app
app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);


module.exports = app;
