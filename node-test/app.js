const express = require("express");

const app = express();

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/messages/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.post("/users", (req, res) => {
  return res.send("Received a POST HTTP METHOD");
});

app.put("/users/:userId", (req, res) => {
  return res.send(`POST HTTP method on user: ${req.params.userId}`);
});

app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user: ${req.params.userId}`);
});

app.listen(3000, () => console.log("server started"));
