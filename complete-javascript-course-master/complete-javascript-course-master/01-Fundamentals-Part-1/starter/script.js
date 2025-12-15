//Values and variables
// let js = "amazing";
// console.log("amazing");
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log(23);

// let firstName = "Godwin";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

////////////////////////////
//Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");
// console.log(typeof PI);
// console.log(typeof 244442662677276355525636626n);
// console.log(typeof userID);

// javascriptIsFun = "YES";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////
//Let, const, var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job; (can't reassign constant variables or declare them without a value because they can't be changed)

// var job = "programmer";
// job = "teacher";
// console.log(job);
//var variables are function scoped

// lastName = "Schmedtmann";
// console.log(lastName);
//Though it's possible to declare a variable without const, let or var keyword, it's a bad practice and highly discouraged

////////////////////////////
//Basic Operators
//Math operarors
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// const ageDimma = now - 2002;
// console.log(ageJonas, ageSarah, ageDimma);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Dimma";
// const lastName = "Joel";
// console.log(firstName + " " + lastName);

// //Assignment Operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 // 101
// x--; // x = x - 1 // 100
// x--; // x = x - 1 // 99
// console.log(x);

// //Comaparison Operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(now - 1991 > now - 2018);

////////////////////////////
//Basic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//ASSIGNMENTS
////////////////////
//Values and variables
const country = "Nigeria";
const continent = "Africa";
let population = 232;

// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////
//Data types
const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);

////////////////////
//Let, Const and Var
language = "English";
// isIsland = true;

////////////////////
//Basic Operators
// population = population / 2;
// population++;
// console.log(population);

// let finlandPopulation = 6;
// console.log(population > finlandPopulation);

// let averagePopulation = 33;
// console.log(population < averagePopulation);

// const description =
//   country +
//   " " +
//   "is in" +
//   " " +
//   continent +
//   "," +
//   " " +
//   "and its" +
//   " " +
//   population +
//   " " +
//   "million people speak" +
//   " " +
//   language;

// console.log(description);

////////////////////
//Strings and template literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

///////////////////////////////
//CHALLENGE 1 SOLUTION
//TEST DATA 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//TEST DATA 2

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn =1.76;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn)

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
