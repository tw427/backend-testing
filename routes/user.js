const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});

router.get("/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

router.post("/", (req, res) => {
  return res.send("Received a POST HTTP METHOD");
});

router.put("/:userId", (req, res) => {
  return res.send(`POST HTTP method on user: ${req.params.userId}`);
});

router.delete("/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user: ${req.params.userId}`);
});

module.exports = router;
