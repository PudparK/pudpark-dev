// Express
const express = require("express");
const app = express();
const cors = require("cors");

// Netlify Serverless
const serverless = require("serverless-http");

// Fetch API
const fetch = require("node-fetch");

// Environmental Variables
require("dotenv").config();

// API Calls
const devTo = require("./endpoints/devto");
const github = require("./endpoints/github");

const router = express.Router();

router.get("/posts", cors(), (req, res) => {
  fetch(devTo.url, devTo.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

router.get("/github", cors(), (req, res) => {
  fetch(github.url, github.opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

app.use("/.netlify/functions/api", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
