const express = require("express");
const cors = require("cors");

const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Nick Davis's Development Profile. Not sure how you ended up here, but I am pleased to have you. Take a look around and, if you're lost, try checking out the <a href = 'https://nicholas-davis-dev.netlify.app/projects'>Projects page</a>!");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.get("/about", (req, res) => {
  res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));