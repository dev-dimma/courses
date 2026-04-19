// Write a program using a for loop that prints the multiplication table of 5, from 5×1 up to 5×10.
// Expected output format:  5 x 1 = 5   /   5 x 2 = 10   ...   5 x 10 = 50
// const multiplicationNumbers
const multiplicationNumbers = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationNumbers} x ${i} = ${multiplicationNumbers * i}`);
}
