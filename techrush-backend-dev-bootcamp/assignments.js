// Assignment Example: Online Bookstore Order

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
const customerName = "Dimma Joel";
let customerAge = 50;
const bookTitle = "Advanced Javascript";
let bookPrice = 500;
const quantity = 20;
const isStudent = false;

// Task 2: Use Arithmetic Operators
const totalPrice = bookPrice * quantity;

// Task 3: Comparison Operators
const isAdult = customerAge >= 18;
const buyingManyBooks = quantity > 3;
const isBookFiveThousand = bookPrice === 5000;

const customerOrder = {
  name: "${customerName}",
  bookTitle: "${bookTitle}",
  quantity: "${quantity}",
  totalPrice: "${totalPrice}",
};

console.log(`Cuctomer Name: ${customerName}`);
console.log(`Book Title: ${bookTitle}`);
console.log(`Total Price: ${totalPrice}`);
console.log(`Is Customer An Adult?: ${isAdult}`);
console.log(`Buying More Than 3 Books?: ${buyingManyBooks}`);
console.log(`Is Book Price 5000: ${isBookFiveThousand}`);
