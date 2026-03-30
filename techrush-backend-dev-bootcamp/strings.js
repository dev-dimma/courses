//length of a string
let stringText = "This is a class on strings method";
console.log(stringText.length);

let capitalLetter = stringText.toUpperCase();
let smallLetter = stringText.toLowerCase();
console.log(capitalLetter);
console.log(smallLetter);

let str = "  Hello World  ";
let trimmedStr = str.trim();
let frontTrimmedStr = str.trimStart();
let endTrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(frontTrimmedStr);
console.log(endTrimmedStr);

let signUpName = " Esther";
let signInName = "Esther";

if (signUpName.trim() === signInName) {
  console.log("Welcome back, Esther.");
} else {
  console.log("Invalid login details");
}

//indexOf and includes methods
let user_email = "ogbuuzoma413@techcrush@gmail.com";
let email_index = user_email.indexOf("@"); //return datatype : number
console.log(email_index);

let email_contains_at = user_email.includes("@"); //return datatype: boolean
console.log(email_contains_at);

//startsWith and endsWith
let userName = "techcrush Esther 6";
let starts = userName.startsWith("techcrush"); //return boolean datatype
console.log(starts);

let ends = userName.endsWith("6"); //return boolean datatype
console.log(ends);

//slice and substring
let testString = "my name is Esther! ";
let slicedString = testString.slice(0, 10); //can count backwards e.g (-9)
let substringString = testString.substring(0, 10); //can't count backwards e.g(-9) starts from zero
console.log(slicedString);
console.log(substringString);

//replace and replaceAll
let text = "Esther is a techie. Esther loves coding and Esther loves teaching";
let replacedText = text.replace("Esther", "She");
let replacedAllText = text.replaceAll("Esther", "She");
console.log(replacedText);
console.log(replacedAllText);

//CLASSWORK
// Given this string:
// const msg = "  Hello, WORLD!  ";
// Do the following (write code):
// 1. Remove extra spaces.
// 2. Check if it starts with "Hello".
// 3. Check if it ends with "WORLD!".
// 4. Convert to lowercase.
// 5. Find position of "WORLD".
// 6. Replace "WORLD" with "Nigeria".
// 7. Replace all "L" with "1".
// 8. Get characters from position 3 to 8.

let msg = "  Hello, WORLD!  ";
const msgTrim = msg.trim();
console.log(msgTrim);

const msgStarts = msg.startsWith("Hello");
console.log(msgStarts);

const msgEnds = msg.endsWith("WORLD");
console.log(msgEnds);

const msgToLowerCase = msg.toLowerCase();
console.log(msgToLowerCase);

const positionOfWorld = msg.indexOf("WORLD");
console.log(positionOfWorld);

const replaceWorld = msg.replace("WORLD", "Nigeria");
console.log(replaceWorld);

const replaceL = msg.replaceAll("L", "1");
console.log(replaceL);

const getCharacters = msg.slice("3", "8");
console.log(getCharacters);

//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++";
let splitSentence = sentence.split(",");
console.log(splitSentence);

let example = "she is a girl, she is a teacher, she is eating";
console.log(example.split("is"));
