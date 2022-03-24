console.log("Hello world");

//primitives values

let name = "pepe"; // string literal
let age = 30; // number literal
let isApproved = false; // boolean literal
let fistName = undefined;
let selectedColor = null;

// reference types

let person = {
  name: "pepe",
  age: 30,
};

// Dot notation
person.name = "juan";

// Bracket Notation
person["name"] = "maria";

console.log(person);

// array

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

// function

//performing a task
function greet(name, lastName) {
  console.log("hello" + " " + name + " " + lastName);
}

greet("pepe", "rodrigez");

// Calculating a value

function square(number) {
  return number * number;
}

console.log(square(2));
