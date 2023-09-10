const express = require("express");
const models = require("../models");
const routes = require("../routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});
app.use("/users", routes.user);
app.use("/messages", routes.message);
app.use("/session", routes.session);

app.listen(3000, () => console.log("server started"));

module.exports = app;
