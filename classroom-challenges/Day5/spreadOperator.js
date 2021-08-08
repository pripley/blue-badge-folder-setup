let students = ["Paul Ripley", "Elyse Swoverland"];

let copiedStudents = [...students];
// let copiedStudents = [students]

students.push("Leslie Philips");

console.log(copiedStudents, "Line 8");

console.log(students, "Line 10");

const persons = [
  { name: "Taylor", age: 300 },
  { name: "Ryan", age: 25 },
];

const copiedPersons = [...persons];

persons.push({ name: "Quinn", age: 24 });
persons[0].name = "Paul"
console.log(persons, copiedPersons);


 console.log(Math.min(1,5,-3))
 let prices = [10.99, 5.99, 3.99, 6.59]
 console.log(Math.min(prices))
 console.log(Math.min(...prices)) //Standalone elements

