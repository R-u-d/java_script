/*******************************
 *  EXERCISE 1: VARIABLES
 *******************************/

// Declare variables
let age = 25;
const birthYear = 1999;
let name = "John Doe";
const isStudent = true;

// Reassign values
age = 26;
name = "Jane Doe";

// The following lines will cause errors because you cannot reassign const variables:
// birthYear = 2000;     // ❌ This will cause an error
// isStudent = false;    // ❌ This will also cause an error

// Print variables
console.log("Age:", age);
console.log("Birth Year:", birthYear);
console.log("Name:", name);
console.log("Is Student:", isStudent);

// Create and modify new variable
let favoriteColor = "blue";
console.log("Favorite Color:", favoriteColor);

favoriteColor = "green";
console.log("New Favorite Color:", favoriteColor);



/*******************************
 *  EXERCISE 2: ARITHMETIC + TYPE COERCION
 *******************************/

// Mixed type variables
let num = 10;
let strNum = "5";

// Addition (string + number)
let addResult = num + strNum;
console.log("Addition (10 + '5'):", addResult);
// Explanation: Number + string → string concatenation

// Subtraction (number - string)
let subResult = num - strNum;
console.log("Subtraction (10 - '5'):", subResult);
// Explanation: JavaScript converts '5' to number → 10 - 5 = 5

// Multiplication with a string
let mulResult = strNum * 3;
console.log("Multiplication ('5' * 3):", mulResult);

// Division by a string
let divResult = num / strNum;
console.log("Division (10 / '5'):", divResult);

// Modulus with two numbers
let mod1 = 10 % 3;
console.log("Modulus (10 % 3):", mod1);

// Modulus with a string
let mod2 = 10 % "3";
console.log("Modulus (10 % '3'):", mod2);

// Series of numeric operations
let a = 20;
let b = 5;
let c = 2;

console.log("Addition (20 + 5 + 2):", a + b + c);
console.log("Subtraction (20 - 5 - 2):", a - b - c);
console.log("Multiplication (20 * 5 * 2):", a * b * c);
console.log("Division (20 / 5 / 2):", a / b / c);
console.log("Modulus (20 % 5 % 2):", a % b % c);



/*******************************
 *  EXERCISE 3: COMPARISON OPERATORS
 *******************************/

let v1 = 5;
let v2 = "5";
let v3 = 10;
let v4 = "10";

console.log("5 == '5':", v1 == v2);
console.log("5 === '5':", v1 === v2);

console.log("10 != '10':", v3 != v4);
console.log("10 !== '10':", v3 !== v4);

console.log("5 > 3:", 5 > 3);
console.log("'5' > '3':", "5" > "3");

console.log("10 < 20:", 10 < 20);
console.log("'10' < '20':", "10" < "20");

console.log("5 >= 5:", 5 >= 5);
console.log("'5' >= 5:", "5" >= 5);

console.log("10 <= 20:", 10 <= 20);
console.log("'10' <= '20':", "10" <= "20");
