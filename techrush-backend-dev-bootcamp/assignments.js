/////////////////////////////////////////
// ASSIGNMENT 1
// Online Bookstore Order

// Imagine you are building a simple online bookstore where customers buy books. You need to store the customer’s details and calculate the total price of the books they buy.

// Task 1: Create Variables

// Create variables to store the following information:
// 	•	Customer name
// 	•	Customer age
// 	•	Book title
// 	•	Price of one book
// 	•	Number of books the customer wants to buy
// 	•	Whether the customer is a student (true or false)

// Example variable names you can use:
// 	•	customerName
// 	•	customerAge
// 	•	bookTitle
// 	•	bookPrice
// 	•	quantity
// 	•	isStudent

// Task 2: Use Arithmetic Operators

// Calculate the total cost of the books.

// Example:

// totalPrice = bookPrice * quantity

// Store the result in a variable called totalPrice.

// Task 3: Use Comparison Operators

// Write expressions to check the following:
// 	1.	Check if the customer is 18 years or older.
// 	2.	Check if the quantity of books is more than 3.
// 	3.	Check if the book price is equal to 5000.

// Store each result in a variable.

// Example variable names:
// 	•	isAdult
// 	•	buyingManyBooks
// 	•	isBookFiveThousand

// Task 4: Use a Non-Primitive Data Type

// Create an object called customerOrder that stores:
// 	•	customerName
// 	•	bookTitle
// 	•	quantity
// 	•	totalPrice

// Example structure:

// const customerOrder = {
//    customerName: "...",
//    bookTitle: "...",
//    quantity: ...,
//    totalPrice: ...
// };

// Task 5: Print the Results

// Use console.log() to display:
// 	•	Customer name
// 	•	Total price
// 	•	The results of the comparison checks

// Example Output (What the program should show)

// Customer Name: Esther
// Book Title: JavaScript Basics
// Total Price: 15000
// Is Customer an Adult? true
// Buying More Than 3 Books? false
// Is Book Price 5000? true

// Task 1: Create Variables
// const customerName = "Dimma Joel";
// let customerAge = 50;
// const bookTitle = "Advanced Javascript";
// let bookPrice = 500;
// const quantity = 20;
// const isStudent = false;

// // Task 2: Use Arithmetic Operators
// const totalPrice = bookPrice * quantity;

// // Task 3: Comparison Operators
// const isAdult = customerAge >= 18;
// const buyingManyBooks = quantity > 3;
// const isBookFiveThousand = bookPrice === 5000;

// const customerOrder = {
//   name: "${customerName}",
//   bookTitle: "${bookTitle}",
//   quantity: "${quantity}",
//   totalPrice: "${totalPrice}",
// };

// console.log(`Cuctomer Name: ${customerName}`);
// console.log(`Book Title: ${bookTitle}`);
// console.log(`Total Price: ${totalPrice}`);
// console.log(`Is Customer An Adult?: ${isAdult}`);
// console.log(`Buying More Than 3 Books?: ${buyingManyBooks}`);
// console.log(`Is Book Price 5000: ${isBookFiveThousand}`);

/////////////////////////////////////////////////////
// ASSIGNMENT 2
// 1. Substring & Slice
// - Given `const str = "Nigeria is awesome";`
// - Extract "Nigeria" using `substring()`.
// - Extract "awesome" using `slice()`.
// - Get "is" using `slice()`.

// 2. Split
// - Given `const names = "John,Jane,Doe";`
// - Split into an array using comma `,`.
// - Join with space instead: `"John Jane Doe"`.
// - Given `const path = "/user/home/docs";`
// - Split by `/` → `["", "user", "home", "docs"]`
// - Get "home" using split & index.

// 3. Mix
// - Given `const email = "user@example.com";`
// - Get username (`user`) using `split()`.
// - Check if it's a `.com` domain using `endsWith()`.
// - Replace `@` with `AT` using `replace()`.

// // solution one
// const str = "Nigeria is awesome";
// const extractNigeria = str.substring(0, 7);
// const extractAwesome = str.slice(11, 18);
// const getIs = str.slice(8, 10);
// console.log(extractNigeria);
// console.log(extractAwesome);
// console.log(getIs);

// // solution two
// const names = "John,Jane,Doe";
// const splitNames = names.split(",");
// const joinNames = splitNames.join(" ");

// const path = "/user/home/docs";
// const splitByStroke = path.split("/");
// const getHome = splitByStroke[2];
// console.log(splitNames);
// console.log(joinNames);
// console.log(splitByStroke);
// console.log(getHome);

// // solution three
// const email = "user@example.com";
// const getUserName = email.split("@")[0];
// const isItDotCom = email.endsWith(".com");
// const replaceAt = email.replace("@", "AT");
// console.log(getUserName);
// console.log(isItDotCom);
// console.log(replaceAt);

/////////////////////////////////////////////////////
// ASSIGNMENT 3
// 1. Given the array below:
// const numbers = [2, 4, 6, 8, 10];
// Use forEach() to print each number multiplied by 2.

// 2. Given the array below:
// const names = ["Esther", "John", "Ada", "Mike"];
// Use forEach() to print a message in this format:
// Hello Esther!
// Hello John!...

// 3. Given the array below:
// const numbers = [1, 2, 3, 4, 5];
// Use map() to create a new array where each number is squared.

// 4. Given the array below:
// const prices = [100, 200, 300];
// Use map() to create a new array where each price has a 10% discount applied.

// 5. Given the array below:
// const numbers = [5, 12, 8, 20, 3];
// Use filter() to create a new array that contains only numbers greater than 10.

// 6. Given the array below:
// const ages = [15, 22, 17, 30, 18];
// Use filter() to return only ages that are 18 and above.

// 7. Given the array below:
// const numbers = [10, 15, 20, 25, 30];
// First, use filter() to get numbers greater than 20
// Then, use map() to double the remaining numbers

//sol 1
const numbers = [2, 4, 6, 8, 10];
numbers.forEach(function (number) {
  console.log(number * 2);
});

//sol 2
const names = ["Esther", "John", "Ada", "Mike"];
names.forEach(function (name) {
  console.log("Hello " + name + "!");
});

//sol 3
const number2 = [1, 2, 3, 4, 5];
const squaredNumbers = number2.map(function (number) {
  return number ** 2;
});
console.log(squaredNumbers);

//sol 4
const prices = [100, 200, 300];
const discountedPrices = prices.map((price) => price * 0.9);
console.log(discountedPrices);

//sol 5
const number3 = [5, 12, 8, 20, 3];
const filteredNumbers = number3.filter(function (number) {
  return number > 10;
});
console.log(filteredNumbers);

//sol 6
const ages = [15, 22, 17, 30, 18];
const filteredAges = ages.filter((age) => age >= 18);
console.log(filteredAges);

//sol 7
const number4 = [10, 15, 20, 25, 30];
const filteredNumberFour = number4.filter((number) => number > 20);
console.log(filteredNumberFour);

const mappedNumber = filteredNumberFour.map(function (number) {
  return number * 2;
});
console.log(mappedNumber);
