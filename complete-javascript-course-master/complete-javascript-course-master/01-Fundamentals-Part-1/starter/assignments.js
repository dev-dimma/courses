/////////////////////////////////////////////////////////////////////
// VALUES AND VARIABLES
// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// 2. Log their values to the console.
const country = "Nigeria";
const continent = "Africa";
let nigeriaPopulation = 242;

console.log(country);
console.log(continent);
console.log(nigeriaPopulation);

/////////////////////////////////////////////////////////////////////
//DATA TYPES
// 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// 2. Log the types of isIsland, population, country and language to the console.
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof nigeriaPopulation);
console.log(typeof country);
console.log(typeof language);

/////////////////////////////////////////////////////////////////////
//LET, CONST, VAR
// 1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
// 2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens.
language = "English";
// country = "Ghana";
// console.log(country);

/////////////////////////////////////////////////////////////////////
//BASIC OPERATORS
// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console.
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. Does you country have less people than the average country?
// 5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

nigeriaPopulation = nigeriaPopulation / 2;
nigeriaPopulation++;
console.log(nigeriaPopulation);

const finlandPopulation = 6;
console.log(nigeriaPopulation > finlandPopulation);

const averagePopulation = 33;
console.log(nigeriaPopulation < averagePopulation);

const description = `${country} is in ${continent}, and it's ${nigeriaPopulation} million people speak ${language}.`;
console.log(description);
