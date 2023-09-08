const express = require("express");
const curl = require("curl");

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

curl.post("http://localhost:3000");
app.listen(3000, () => console.log("server started"));
