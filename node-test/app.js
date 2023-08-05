#!/usr/bin/env node

const fs = require("fs/promises");

const fileName = "./fs-test-rename.txt";

async function write(content) {
  try {
    await fs.writeFile(fileName, content);
  } catch (err) {
    console.log(err);
  }
}

async function example() {
  try {
    const data = await fs.readFile(fileName, {
      encoding: "utf8",
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

write("I want some new content!");
example();
