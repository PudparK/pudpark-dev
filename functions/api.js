// Express
const express = require("express");
const app = express();

// Netlify Serverless
const serverless = require("serverless-http");

// Fetch API
const fetch = require("node-fetch");

// Environmental Variables
require("dotenv").config();

// API Calls
const github = require("./github");

const router = express.Router();

router.get("/repos", (req, res) => {
  fetch(github.url, github.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

app.use("/.netlify/functions/api", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
