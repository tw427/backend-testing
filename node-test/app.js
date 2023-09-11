const express = require("express");
const jwt = require("jsonwebtoken");
// const models = require("../models");
// const routes = require("../routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "odin", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created.",
        authData,
      });
    }
  });
  res.json({
    message: "Post created...",
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: "Odin",
    email: "odin@gmail.com",
  };

  jwt.sign({ user: user }, "odin", { expiresIn: "30s" }, (err, token) => {
    res.json({
      token: token,
    });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split Bearer <access_token> at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array ^
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

// app.use((req, res, next) => {
//   req.context = {
//     models,
//     me: models.users[1],
//   };
//   next();
// });
// app.use("/users", routes.user);
// app.use("/messages", routes.message);
// app.use("/session", routes.session);

app.listen(3000, () => console.log("Server started on 3000"));

module.exports = app;
