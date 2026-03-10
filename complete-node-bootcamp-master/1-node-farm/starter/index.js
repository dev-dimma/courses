const fs = require("fs");

//reading a file synchronously
const textIn = fs.readFileSync("./txt/input.txt/", "utf-8");
console.log(textIn);
