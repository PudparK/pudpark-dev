const express = require("express");
const app = express();
const serverless = require("serverless-http");

const fetch = require("node-fetch");

require("dotenv").config();

const query = `
{
  user (login: "PudparK") {
    name
    avatarUrl
    repositories (first: 100) {
      nodes {
        name
        createdAt
        description
        homepageUrl
        isPrivate
        label(name: "") {
          name
        }
      }
    }
  }
}`;
const url = "https://api.github.com/graphql";
const opts = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
  body: JSON.stringify({ query }),
};

const router = express.Router();

router.get("/", (req, res) => res.send("Hello"));

router.get("/repos", (req, res) => {
  fetch(url, opts)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch(console.error);
});

app.use("/.netlify/functions/github", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
