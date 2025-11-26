/********************************************
 *  EXERCISE 1: OBJECT LITERALS
 ********************************************/

// Create the book object using object literal syntax
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  isRead: true,

  // Method that returns a summary of the book
  summary: function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? "Yes" : "No"}`;
  }
};

// Example usage:
console.log(book.summary());


/********************************************
 *  EXERCISE 2: DESTRUCTURING
 ********************************************/

// -------------------------------
// Array Destructuring
// -------------------------------

const fruits = ["Apple", "Banana", "Cherry", "Date"];

// 1. Simple Array Destructuring
const [fruit1, fruit2] = fruits;
console.log("Fruit 1:", fruit1); // Apple
console.log("Fruit 2:", fruit2); // Banana

// 2. Skipping Elements in Array Destructuring
const [firstFruit, , thirdFruit] = fruits;
console.log("First Fruit:", firstFruit); // Apple
console.log("Third Fruit:", thirdFruit); // Cherry


// -------------------------------
// Object Destructuring
// -------------------------------

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001
  }
};

// 3. Simple Object Destructuring
const { name, age } = person;
console.log("Name:", name); // John
console.log("Age:", age);   // 30

// 4. Nested Object Destructuring
const { address: { city } } = person;
console.log("City:", city); // New York


// -------------------------------
// Destructuring in Function Parameters
// -------------------------------

// Original version:
// function displayPerson(person) {
//   console.log(person.name, person.age);
// }

// 5. Modified to use destructuring in parameters
function displayPerson({ name, age }) {
  console.log("Display Person:", name, age);
}

displayPerson(person);

