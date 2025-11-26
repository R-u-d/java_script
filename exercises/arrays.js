/************************************************
 *  EXERCISE 1: INITIALIZING & MODIFYING ARRAYS
 ************************************************/

// Initialize array
let myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];
console.log("Original myArray:", myArray);

// Access each element individually
console.log("Element 0:", myArray[0]);
console.log("Element 1:", myArray[1]);
console.log("Element 2:", myArray[2]);
console.log("Element 3:", myArray[3]);
console.log("Element 4:", myArray[4]);

// Bonus: use for loop to print elements
for (let i = 0; i < myArray.length; i++) {
    console.log(`myArray[${i}] =`, myArray[i]);
}

// Modify second element
myArray[1] = "Changed value";
console.log("myArray after modification:", myArray);



/************************************************
 *  EXERCISE 2: push, pop, shift, unshift
 ************************************************/

let myArray2 = [1, 2, 3, 4, 5];
console.log("Initial myArray2:", myArray2);

// push
myArray2.push(6, 7);
console.log("After push:", myArray2);

// pop
myArray2.pop();
console.log("After pop:", myArray2);

// shift
myArray2.shift();
console.log("After shift:", myArray2);

// unshift
myArray2.unshift(0, 1);
console.log("After unshift:", myArray2);



/************************************************
 *  EXERCISE 3: reverse() and toReversed()
 ************************************************/

let array1 = [1, 2, 3, 4, 5];
console.log("array1 before reverse:", array1);

// Reverse in place
array1.reverse();
console.log("array1 after reverse:", array1);

let array2 = ["a", "b", "c", "d", "e"];
console.log("array2 before toReversed:", array2);

// Create reversed copy
let reversedCopy = array2.toReversed();
console.log("Reversed copy:", reversedCopy);
console.log("array2 remains unchanged:", array2);



/************************************************
 *  EXERCISE 4: splice() and toSpliced()
 ************************************************/

let array3 = [10, 20, 30, 40, 50];
console.log("array3 before splice:", array3);

// Remove element at index 2 and add 35, 36
array3.splice(2, 1, 35, 36);
console.log("array3 after splice:", array3);

let array4 = ["a", "x", "y", "z"];
console.log("array4 before toSpliced:", array4);

// Remove index 1 and add 'b' and 'c'
let splicedCopy = array4.toSpliced(1, 1, "b", "c");
console.log("spliced copy:", splicedCopy);
console.log("array4 remains unchanged:", array4);



/************************************************
 *  EXERCISE 5: slice()
 ************************************************/

let array5 = [100, 200, 300, 400, 500];
console.log("Original array5:", array5);

// Slicing examples
let slice1 = array5.slice(0, 2);  // first two elements
let slice2 = array5.slice(2);     // from index 2 to end
let slice3 = array5.slice(1, 4);  // middle portion

console.log("slice1:", slice1);
console.log("slice2:", slice2);
console.log("slice3:", slice3);

console.log("Is array5 affected?", array5); // No change



/************************************************
 *  EXERCISE 6: join()
 ************************************************/

let wordArray = ["JavaScript", "is", "fun"];
console.log("Original wordArray:", wordArray);

// Joining with different delimiters
let joined1 = wordArray.join(" ");
let joined2 = wordArray.join("-");
let joined3 = wordArray.join("🔥");

console.log("Joined with spaces:", joined1);
console.log("Joined with hyphens:", joined2);
console.log("Joined with fire emoji:", joined3);



/************************************************
 *  EXERCISE 7: for loop & for...of loop
 ************************************************/

let numberArray = [10, 20, 30, 40, 50];

// for loop
console.log("Iterating with for loop:");
for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}

// for...of loop
console.log("Iterating with for...of loop:");
for (let num of numberArray) {
    console.log(num);
}
