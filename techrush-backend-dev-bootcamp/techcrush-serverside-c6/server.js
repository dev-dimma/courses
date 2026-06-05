// Step 1: Import express module
const express = require("express");

// Step 2: Create an express application instance
const app = express();
const studentInfo = [
  { name: "Alice", age: 20, grade: "A" },
  {
    name: "Bob",
    age: 21,
    grade: "B",
  },
  {
    name: "Charlie",
    age: 22,
    grade: "C",
  },
];

app.get("/all-data", function (req, res) {
  res.json(studentInfo[0]);
});

// Step 1: Define a route handler for GET requets to /
app.get("/home", function (req, res) {
  res.send("Hello, World! Welcome to Express.js!");
});

app.get("/about", (request, response) => {
  response.send("This is about page");
});

app.get("/contact", (request, response) => {
  response.send("This is contact page");
});

// Step 1: Start listening on port 3000
app.listen(3000, function () {
  console.log("Server is up and running");
});
