/********************************************
 *  EXERCISE 1: TEMPERATURE ADVICE
 ********************************************/

let temperature = 22; // Change this value to test different scenarios

// if/else (coat advice)
if (temperature < 15) {
    console.log("It's cold — wear a coat!");
} else {
    console.log("No coat needed.");
}

// if / else if / else (three ranges)
if (temperature < 15) {
    console.log("Advice: Wear a coat.");
} else if (temperature >= 15 && temperature <= 25) {
    console.log("Advice: Wear a sweater.");
} else {
    console.log("Advice: Wear a T-shirt.");
}

// Switch statement
switch (temperature) {
    case 10:
        console.log("Switch Advice: It's 10°C — definitely a coat!");
        break;
    case 20:
        console.log("Switch Advice: It's 20°C — maybe a sweater.");
        break;
    case 30:
        console.log("Switch Advice: It's 30°C — grab a t-shirt!");
        break;
    default:
        console.log("Switch Advice: No specific advice for this temperature.");
}


/********************************************
 *  EXERCISE 2: LOOPS AND ANIMAL COUNTING
 ********************************************/

const animals = ["lion", "tiger", "monkey", "giraffe", "zebra", "mouse"];

// 1. For loop — count all animals
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
    totalAnimals++;
}
console.log("Total Animals:", totalAnimals);

// 2. While loop — count animals with 5+ letters
let index = 0;
let longNameCount = 0;

while (index < animals.length) {
    if (animals[index].length >= 5) {
        longNameCount++;
    }
    index++;
}
console.log("Animals with 5+ letters:", longNameCount);

// 3. Do...while — count until name starts with "m"
let countUntilM = 0;
let j = 0;

do {
    if (animals[j].startsWith("m")) break;
    countUntilM++;
    j++;
} while (j < animals.length);

console.log("Animals counted until one starting with 'm':", countUntilM);


/********************************************
 *  EXERCISE 3: FUNCTIONS — DECLARATIONS
 ********************************************/

// 1. Function declaration (no params)
function greet() {
    console.log("Hello, World!");
}
greet();

// 2. Function with parameter, returning something
function square(num) {
    return num * num;
}
let sq = square(5);
console.log("Square of 5:", sq);

// 3. Function using switch
function getDayName(dayNum) {
    switch (dayNum) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day number";
    }
}

let day = getDayName(3);
console.log("Day 3 is:", day);


/********************************************
 *  EXERCISE 4: FUNCTIONS — EXPRESSIONS
 ********************************************/

// 1. greet as expression
const greetExpression = function () {
    console.log("Hello, World! (from expression)");
};
greetExpression();

// 2. square as expression
const squareExpression = function (num) {
    return num * num;
};
let sqExp = squareExpression(5);
console.log("Square (expression) of 5:", sqExp);

// 3. getDayName as expression
const getDayNameExpression = function (dayNum) {
    switch (dayNum) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Invalid day number";
    }
};

let dayExp = getDayNameExpression(3);
console.log("Day 3 (expression) is:", dayExp);


/********************************************
 *  EXERCISE 5: var, let, const + SCOPE
 ********************************************/

// 1. Global and Function Scope with var
var globalVar = "I'm global!";
console.log(globalVar);

function testVarScope() {
    var globalVar = "I'm local inside the function!";
    console.log(globalVar);
}
testVarScope();

console.log(globalVar); // still unchanged globally

// 2. Block Scope with let and const
if (true) {
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm block-scoped (const)";

    console.log(blockLet);
    console.log(blockConst);

    // Redeclaring throws error — commented out:
    // let blockLet = "error!";
    // const blockConst = "error!";
}

// Trying to access outside will cause errors — so commented:
// console.log(blockLet);
// console.log(blockConst);

// 3. Redeclaration with var inside block
if (true) {
    var globalVar = "Redeclared with var inside block!";
    console.log(globalVar); // new value
}
console.log(globalVar); // block redeclaration *leaks out* (bad!)


// 4. const with arrays and objects
const colors = ["red", "green", "blue"];
const person = { name: "Alice", age: 30 };

console.log("Before changes:", colors, person);

// Modify contents (allowed!)
colors.push("yellow");
person.age = 31;

console.log("After changes:", colors, person);


/********************************************
 *  DISCUSSION NOTES
 ********************************************/

console.log(`
    
--- DISCUSSION ---
var is function-scoped and leaks out of blocks, which can lead to bugs.

let is block-scoped and safer because it cannot be redeclared in the same scope.

const is also block-scoped, but the variable cannot be reassigned. However,
objects and arrays declared with const CAN have their contents changed.
`);
