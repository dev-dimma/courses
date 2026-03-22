//IF/ELSE STATEMENTS
let userAge = 16;
if (userAge >= 18) {
  console.log("Welcome to club 9ja.");
} else {
  console.log("Sorry, you're not allowed to enter.");
}

let gender = "female";

if (gender === "female") {
  console.log("Welcome to the ladies section");
} else if (gender === "male") {
  console.log("Welcome to the male section");
} else if (gender === "other") {
  console.log("Welcome to the other section");
} else {
  console.log("We don't know where you belong");
}

//real world usage of if/else statement
let username = "Esther";
let password = "Password123";

if (username === "Esther" && password === "Password123") {
  console.log("Login successful");
} else if (username === "Esther" || password === "Password123") {
  console.log("Username is correct");
} else {
  console.log("Login failed");
}

//Classwork

let age = 17;
if (age >= 18) {
  console.log("You CAN vote in the election");
} else {
  console.log("You CAN'T vote in the election");
}
