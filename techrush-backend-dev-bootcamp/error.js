//syntax error - typo
// let add = 5 + 3;
// console.log(add);

//reference error - using a variable that doesn't exist
let myName = "Amina";
console.log(myName);

//type error - using a value in the wrong way
let age = 25;
console.log(age.toString());

//try and catch error handling
try {
  //Code that might fail goes here
  let result = 10 / 0;
  console.log(result);
  undefinedFunction(); //This will cause an error
  console.log("This line will NOT run");
} catch (error) {
  //This runs ONLY if something goes wrong
  console.log("An error occurred: " + error.name, error.message);
}
console.log("The program continues here.");

try {
  let age = 25;
  console.log(age.length());
} catch (error) {
  console.log("An error occurred: " + error.name, error.message);
}

//finally block in try and catch
function loadUserData(userId) {
  console.log("Starting to load data...");
  try {
    if (!userId.startsWith("BAD")) {
      throw new Error("User ID must start with BAD");
    }
    console.log("Data loaded for user: " + userId);
  } catch (error) {
    console.log("Failed: " + error.message);
  } finally {
    console.log("Loading complete. Closing connection"); //Always runs
  }
}

loadUserData("BAD-1234");
