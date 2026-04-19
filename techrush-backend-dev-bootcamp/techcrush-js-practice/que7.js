// Write a function formatName(firstName, lastName) that trims extra spaces from both inputs and returns the full name in this exact format: 'LASTNAME, Firstname'.
// Test: formatName('  esther  ', '  ogbu  ') should return 'OGBU, Esther'

// function formatName(firstName, lastName) {
//   firstName = firstName.trim();
//   lastName = lastName.trim();
//   return ` ${lastName}, ${firstName}`;
// }

// console.log(formatName(" Dimma  ", "    Joel"));

function formatName(firstName, lastName) {
  firstName = firstName.trim();
  lastName = lastName.trim();

  const formattedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  const formattedLastName = lastName.toUpperCase();

  return `${formattedLastName}, ${formattedFirstName}`;
}

console.log(formatName(" dimma  ", "    joel"));
