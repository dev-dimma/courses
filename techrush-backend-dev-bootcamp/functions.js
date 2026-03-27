//function declaration and calling without parameters
function greet() {
  console.log("Welcome back, Esther!");
}
greet();

//with parameter and argument
function farewell(name) {
  console.log("See you again, " + name + ".");
}
farewell("Esther");

// let x = 5;
// let y = 10;
// console.log(x + y);

function add() {
  let a = 5;
  let b = 10;
  return a + b;
}
console.log(add());

function addition(a, b) {
  return a + b;
}
console.log(addition(5, 3));

function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(20));
console.log(isAdult(16));
