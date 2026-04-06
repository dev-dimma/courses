let obj = {
  name: "Esther",
  age: 25,
  profession: "Developer",
};
//Accessing data in objects
let student = {
  name: "Ngozi Adeyemi",
  age: 21,
  department: "Computer Science",
  isEnrolled: true,
};

console.log(student.name);
console.log(student["age"]);

//Destructuring objects = tearing it down into smaller bits
let employee = {
  name: "Tunde Balogun",
  role: "Frontend Developer",
  salary: 450000,
  city: "Lagos",
};

let newName = employee.name;
let newRole = employee.role;

const { name, role, salary, city } = employee;
console.log(name);
console.log(role);
console.log(salary);
console.log(city);

//rename while destructuring
let courses = {
  CSC401: "Data Structures",
  CSC402: "Algorithms",
  CSC403: "Operating Systems",
  CSC404: "Database Systems",
};

let { CSC401: CSC400 } = courses;
console.log(CSC400);

let person = {
  name: "Amina",
  opay: true,
};
console.log(person);
let { opay: palmpay } = person;
console.log(palmpay);

//spread operator
let profile = {
  name: "Ada",
  age: 22,
};

let updatedProfile = {
  ...profile,
  city: "Abuja",
};
console.log(updatedProfile);

//rest operator
const { nombre, ...rest } = {
  name: "Emeka",
  age: 25,
  city: "Lagos",
};
