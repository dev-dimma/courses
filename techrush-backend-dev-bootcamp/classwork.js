//1. Using the map method, create a new array where each number is doubled
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

//2. Return scores greater than or equal to 300
const scores = [250, 300, 350, 200, 400, 180, 160];
const filteredScores = scores.map((score) => score >= 300);
console.log(filteredScores);

//3. Get me sum of all items in the array
const sum = [2000, 3000, 400, 100, 600];
const summedArray = sum.reduce(function (acc, value) {
  return acc + value;
}, 0);
console.log(summedArray);

//4. Add "green" to the end of the array and remove "red" from the array
const colors = ["blue", "yellow", "red"];
const addGreen = colors.push("green");
const removeRed = colors.pop();
console.log(colors);
console.log(addGreen);
console.log(removeRed);
