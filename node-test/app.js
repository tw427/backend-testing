#!/usr/bin/env node

const fs = require("fs/promises");

async function example() {
  try {
    const content = "Some promise content!";
    await fs.writeFile("./fs-test-rename.txt", content);
  } catch (err) {
    console.log(err);
  }
}

example();
