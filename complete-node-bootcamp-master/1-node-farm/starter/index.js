const fs = require("fs");

//Blocking, Synchronous Way
//reading a file synchronously
const textIn = fs.readFileSync("./txt/input.txt/", "utf-8");
console.log(textIn);

//creating a new file and writing to it synchronously
const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("file written");
