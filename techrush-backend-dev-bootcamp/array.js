let item1 = "milk";
let item2 = "milo";
let item3 = "rice";

let items = ["milk", "milo", "rice", 1, 2, 3, 4, true]; //an array can take values of same or different data types.
console.log(items[0]); //index returns the value itself and it starts from "0"
console.log(items.length); //while length returns the number of characters in an array and starts from "1"
//Assignment: Difference between higher order array methods and array methods.

//forEach method
//foreach takes in a function and also acts as forloop
let fruits = ["apple", "banana", "orange", "grape", "mango"];
let names = ["esther", "john", "doe", "jane", "smith"];

fruits.forEach(function (fruit) {
  console.log("I eat " + fruit);
});

names.forEach(function (name) {
  console.log("TECH_CRUSH_2026_COHORT_6 " + name);
});

//map method
let scores = [90, 80, 70, 60, 50];
// let newScores = scores.map((score) => score + 5);
// console.log(newScores);
let newScores = scores.map((x) => {
  console.log("as a good teacher, I decided to add 5 marks to all my students");
  return x + 5;
});

let students = ["esther", "john", "doe", "jane", "smith"];
let nameTag = students.map(function (tag) {
  return "TECH_CRUSH_2026_COHORT_6 " + tag;
});
console.log(nameTag);

//filter method
let jambScores = [200, 250, 300, 150, 180, 280, 290, 100];
let passed = jambScores.filter((score) => {
  return score >= 200;
});
console.log(passed);

let age = [18, 25, 30, 15, 20, 35, 40];
let adults = age.filter(function (age) {
  return age >= 18;
});
console.log(adults);

//find method
const studentsNames = ["John", "John", "Ada", "Doe", "Jane", "Smith", "Bola"];
const found = studentsNames.find((name) => {
  return name === "John";
});
console.log(found);

//reduce method
let cartPrices = [1500, 800, 2200, 450, 1000];
let total = cartPrices.reduce(function (accumulator, currentPrice) {
  return accumulator + currentPrice;
}, 10000); //accumulator, current value, initial value
console.log(total);

//Arrow function version
let grandTotal = cartPrices.reduce((acc, price) => {
  return acc + price;
}, 0);
console.log(grandTotal);

//push, pop, shift, unshift
let colors = ["red", "blue", "green"];
colors.push("yellow"); //add an element to the end of the array

let lastColor = colors.pop(); //removes the last element from the array
console.log(colors);
console.log(lastColor);

let firstColor = colors.shift(); //remove the first element from the array
console.log(colors);
console.log(firstColor);

let newLength = colors.unshift("purple"); //add an element to the beginning of the array
console.log(colors);
console.log(newLength);
