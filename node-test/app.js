const express = require("express");
const bodyParser = require("body-parser");
const apicache = require("apicache");
let cache = apicache.middleware;
app.use(cache("5 minutes"));

const app = express();

const users = [{ email: "abc@foo.com" }];
const employees = [
  { firstName: "Jane", lastName: "Smith", age: 20 },
  //...
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Mary", lastName: "Green", age: 50 },
];

app.use(bodyParser.json());
// users example of returning errors
app.post("/users", (req, res) => {
  const { email } = req.body;
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }
  res.json(req.body);
});
// End of example

// example of filtering out items by their fields with a query string
app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];
  if (firstName) {
    results = results.filter((r) => r.firstName === firstName);
  }

  if (lastName) {
    results = results.filter((r) => r.lastName === lastName);
  }

  if (age) {
    results = results.filter((r) => +r.age === +age);
  }
  res.json(results);
});

app.get("/articles/:articleId/comments", (req, res) => {
  const { articleId } = req.params;
  const comments = [];
  // code to GET comments via articleId
  res.json(comments);
});

app.get("/articles", (req, res) => {
  const articles = [];
  // code to get articles
  res.json(articles);
});

app.post("/articles", (req, res) => {
  // code to post article
  res.json(req.body);
});

app.put("/articles/:id", (req, res) => {
  const { id } = req.params;
  // code to update article
  res.json(req.body);
});

app.delete("/articles/:id", (req, res) => {
  const { id } = req.params;
  res.json({ deleted: id });
});

app.listen(3000, () => console.log("server started"));
