#!/usr/bin/env node

const fs = require("fs");

fs.rename("fs-test.txt", "fs-test-rename.txt", (err) => {
  if (err) {
    return console.error(err);
  }
});
