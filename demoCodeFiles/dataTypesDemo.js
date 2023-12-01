/* Caelum Noonan
CS 330 PLP Project Part 2: Data Types
This demo code shows examples of data types in JS and how variables and the data they hold are used. */

/* ----------------------------------------------
DATA TYPES
------------------------------------------------- */

// JS is a weakly-typed language
// this means it allows implicit conversions between unrelated variable types
let x = "5";
console.log(typeof x) // output: string
x = 5
console.log(typeof x) // output: number

// both string and int declared with "const"
const stringVar = "6";
const intVar = 2

/* ----------------------------------------------
OPERATORS
------------------------------------------------- */

// Here are some example of how an arithmetic operator is used in JS.
const num1 = 5;
const num2 = 2;

// We can add 2 variables with the addition operator +
const add = num1 + num2;

// We can subtract one variable from another with the subtraction operator -
const sub = num1 - num2;

// We can multiply 2 variables with the multiplication operator *
const mult = num1 * num2;

// We can divide one variable by another with the division operator /
const div = num1 / num2;

/* Adding two variables of the number type will return the sum, but adding a number and a string will return a
concatenated string, even if the string contains a number, such as shown below: */
let addInt = 5 + 5; // returns: 10
let addString = "5" + 5; // returns: "55"