const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP METHOD");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP METHOD");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP METHOD");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP METHOD");
});

app.listen(3000, () => console.log("server started"));
