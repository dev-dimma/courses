// Create an object called myProfile with at least 4 properties: name, age, country, and hobby. Then write a function displayProfile(person) that logs a sentence describing the person using their properties.
const myProfile = {
  name: "Dimma Joel",
  age: 24,
  country: "Nigeria",
  profession: "Software Engineer",
  hobby: "Travelling",
};

function displayProfile(person) {
  return `The name of the new employee is ${person.name}. She's ${person.age} years old, a citizen of ${person.country} and an accomplished ${person.profession}. She loves ${person.hobby} to new places and discovering diverse people and culture.`;
}
console.log(displayProfile(myProfile));
