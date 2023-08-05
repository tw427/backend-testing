#!/usr/bin/env node

const fs = require("fs");

const content = "Some content!";

fs.writeFile("./fs-test-rename.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
});
