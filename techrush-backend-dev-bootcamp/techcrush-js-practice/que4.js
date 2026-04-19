// Given the array below, write code to:
// 1. Add 'pineapple' to the end
// 2. Remove the first item
// 3. Log the updated array and its length
// const fruits = ["mango", "orange", "banana"];

const fruits = ["mango", "orange", "banana"];
const addFruit = fruits.push("pineapple");
const removeFruit = fruits.shift();
console.log(addFruit);
console.log(removeFruit);
console.log(fruits);
console.log(fruits.length);
