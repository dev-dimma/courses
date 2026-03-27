//challenge 1
let str = "Coding is fun";
//extract the word "coding"
let word = str.slice(0.6);
console.log;

let fun = str.substring(10, 13);
console.log(fun);
console.log(str.slice(7, 9));

//challenge 2
const colors = "red, green, blue, yellow";
const comma = colors.split(",");
console.log(comma);

const joined = comma.join(" - ");
console.log(joined);

//challenge 3
const url = "/api/v1/users";
const slash = url.split("/");
console.log(slash[2]);

//challenge 4
const email = "text@school.edu";
const userName = email.split("test");
console.log(userName);

const domainEnding = email.endsWith(".edu");
console.log(domainEnding);

const replaceWord = email.replace("@", "AT");
console.log(replaceWord);
