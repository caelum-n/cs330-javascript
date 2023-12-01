/* Caelum Noonan
CS 330 PLP Project Part 2: Data Types
This demo code shows examples of data types in JS and how variables and the data they hold are used. */

/* ----------------------------------------------
DATA TYPES
------------------------------------------------- */
// Examples of how to declare different primitive data types:

const word = "elephant"; //string
let number = 5; //number
number = 7.65; //numbers can be ints or floats; they are all stored as 64-bit floating point numbers (doubles) in JS
let bigNum = 12345678901234567890123456789; //numbers that are too big to be stored as regular numbers
const bool = true; //boolean

//----------------------------------------------

// JS is a weakly-typed language
// this means it allows implicit conversions between unrelated variable types
let x = "5";
console.log(typeof x) // output: string
x = 5
console.log(typeof x) // output: number

// both string and int declared with "const"
const stringVar = "6";
const intVar = 2;


/* ----------------------------------------------
OPERATORS
------------------------------------------------- */

//ARITHMETIC OPERATORS

// Here are some example of how an arithmetic operator is used in JS.
const num1 = 5;
const num2 = 2;

// We can add 2 variables with the addition operator +
const add = num1 + num2;
console.log(add);

// We can subtract one variable from another with the subtraction operator -
const sub = num1 - num2;
console.log(sub);

// We can multiply 2 variables with the multiplication operator *
const mult = num1 * num2;
console.log(mult);

// We can divide one variable by another with the division operator /
const div = num1 / num2;
console.log(div);

//----------------------------------------------

/* Adding two variables of the number type will return the sum, but adding a number and a string will return a
concatenated string, even if the string contains a number, such as shown below: */

let addInt = 5 + 5; // returns: 10
console.log(addInt);

let addString = "5" + 5; // returns: "55"
console.log(addString);

//----------------------------------------------

// Logical Not Operator
const aVariable = 5;
if (isNaN(aVariable)) { // returns false --> aVariable is a number
    console.log("This is not a number.");
} else {
    console.log("This is a number.")
}

if (!isNaN(aVariable)) { // returns true --> isNaN() returns false, which is negated by the Logical Not operator
    console.log("This is a number");
} else {
    console.log("This is not a number")
}

// TERNARY OPERATOR

const height = 56;
const heightSafety = (height < 48) ? "Too short for safety":"Tall enough to ride";
console.log(heightSafety)