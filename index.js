const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.listen(4000, console.log("Listening on port 4000"));
