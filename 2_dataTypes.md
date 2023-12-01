# Data Types In JavaScript

## Variables

### What Are Variables Again?

In programming, variables are used to label and store data in computer memory for future use. You can think of them as
containers for storing information you might need later. For example, we might want to store two numbers, so later in
the program we can add them together.

```
num1 = 10;
num2 = 15;

sum = num1 + num2; // calculate sum of num1 & num2
console.log(sum); // display sum
```

### Declaring (Creating) variables

There are four ways to declare a variable in JS.

- Automatically (implicitly)
- Using var
- Using let
- Using const

Although JavaScript will run code with implicitly declared variables, it is a good idea to always declare variables. In
fact, here are some good rules of thumb when it comes to variables in JavaScript:[^1]

[^1]: https://www.w3schools.com/js/js_variables.asp

1. Always declare variables
2. Always use const if the **value** should not be changed
3. Always use const if the **type** should not be changed _(Arrays and Objects)_
4. Only use let if you can't use const _(any variable that will change)_
5. Only use var if you need to support old browsers

### Naming Variables

Like any programming language, JavaScript has its own rules about what names you can give to the variables in your
code. This ensures that the JS engine correctly identifies a variable name when it comes up in your code.

Variables in JavaScript must start with a letter, an underscore `_`, or a dollar sign `$` and may not contain spaces.
Variables are also case-sensitive, meaning that `y` and `Y` are two different variables. You may not use any reserved
words (words which already have a specific meaning in JS, such as `const` or `while`) as a variable name.[^2] Below
is a list of the reserved words in JavaScript.

[^2]: https://www.javascript.com/learn/variables

By convention, JavaScript variable names are written in camelCase. Not doing so could be considered bad coding
practice, but will not hinder you from running your code.[^3] Another good practice in naming variables in general is to
set descriptive names that indicate a variable's content and/or usage. In JS specifically, it can be useful to
include information about data type, as variables are implicitly typed.[^4]

[^3]: https://www.w3schools.com/js/js_conventions.asp

[^4]: https://sentry.io/answers/naming-variables-in-javascript/

For example, in a line of code such as `const order = tempOrder;` might contain a string, an object,
or an order ID number. Adding more information to the name, such as `orderNum` or `orderName` or even `orderObj`
can clarify for a reader (including your future self) what you intended a variable to do and how it works.

### Reserved words

This list of reserved words cannot be used for variable names or function names.[^5]

|   abstract   |   arguments    |      await       |    boolean    |
|:------------:|:--------------:|:----------------:|:-------------:|
|  **break**   |    **byte**    |     **case**     |   **catch**   |
|   **char**   |   **class**    |    **const**     | **continue**  | 
| **debugger** |  **default**   |    **delete**    |    **do**     |
|  **double**  |    **else**    |     **enum**     |   **eval**    |
|  **export**  |  **extends**   |    **false**     |   **final**   |
| **finally**  |   **float**    |     **for**      | **function**  |
|   **goto**   |     **if**     |  **implements**  |  **import**   |
|    **in**    | **instanceof** |     **int**      | **interface** |
|   **let**    |    **long**    |    **native**    |    **new**    |
|   **null**   |  **package**   |   **private**    | **protected** |
|  **public**  |   **return**   |    **short**     |  **static**   |
|  **super**   |   **switch**   | **synchronized** |   **this**    |
|  **throw**   |   **throws**   |  **transient**   |   **true**    |
|   **try**    |   **typeof**   |     **var**      |   **void**    |
| **volatile** |   **while**    |     **with**     |   **yield**   |

Keywords in any language can and do change as the language is updated. The words listed below have been removed as
reserved words in ECMAScript 5/6, but should not be used as variable names because not all browsers support the
newest version. Using these older keywords can still cause errors if they are used and then the code is run on an
older browser.[^5]

|     abstract     |  boolean   |     byte      |     char     |
|:----------------:|:----------:|:-------------:|:------------:|
|    **double**    | **final**  |   **float**   |   **goto**   |
|     **int**      |  **long**  |  **native**   |  **short**   |
| **synchronized** | **throws** | **transient** | **volatile** |

Lastly, JavaScript has some built-in Objects, Properties, and Methods which should be treated as reserved words.[^5]
This means to avoid them even if some, such as some method names, might technically allow you to use them.

|       Array        |     Date     |      eval      |   function    |
|:------------------:|:------------:|:--------------:|:-------------:|
| **hasOwnProperty** | **Infinity** |  **isFinite**  |   **isNaN**   |
| **isPrototypeOf**  |  **length**  |    **Math**    |    **NaN**    |
|     **name**	      |  **Number**  |   **Object**   | **prototype** |
|     **String**     | **toString** | 	**undefined** |  **valueOf**  |

[^5]: https://www.w3schools.com/js/js_reserved.asp

## Type Style

JavaScript is a **dynamically typed** language, which means that _type checking_ (the process of verifying and
enforcing the constraints of a variable's type on its value(s)) of a program is checked at runtime. This differs
from a **statically typed** language, where type checking happens at compile time. Python is another example of a
dynamically typed language.

JavaScript is also a **weakly typed** language. Weakly-typed languages convert between unrelated types implicitly.
On the other hand, a **strongly-typed** language requires explicit conversions between unrelated types. An
example, shown below, is that JavaScript allows you to assign an integer to a variable that currently holds a string.
[^6]

| JavaScript                                                     | Java                                                                                           |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| ```// allowed code ```<br/>```let x = "6";```<br/>```x = 2 ``` | ```// to do the same in Java```<br/>```String x = "6"```<br/>```int y = Integer.parseInt(x)``` |

You can also see in the example below that JS allows implicit type conversions. Using console.log(), we can print
the variable's data type first after assigning a string and then after reassigning a number and view the difference.

```
let x = "5";
console.log(typeof x) // output: string
x = 5
console.log(typeof x) // output: number
```

Lastly, JavaScript is **implicitly typed**, meaning there are no explicit declarations of the data type of variables.
In simpler terms, one declares both a string and an int using "const".

``` 
// both string and int declared with "const"
const x = "6";
const y = 2
```

## Data Types

All data types in JavaScript can be categorized into two groups: **Primitive** types and **Reference** types.

JavaScript has five basic primitive (not an object) types which are immutable and represented at the lowest level of
the language. These data types are:

| Type    | Example                                    |
|---------|--------------------------------------------|
| string  | `const name = "John";`                     |
| number  | `const width = 16;`                        |
| bigint  | `const x = 123456789012345678901234567890` |
| boolean | `const x = true;`                          |
| symbol  | ***                                        |

*** A Symbol is a unique and immutable primitive value often used as an identifier or key. In some programming
languages, Symbols are called "atoms".[^7]

[^7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

> [!NOTE]
> Javascript numbers are always one type: double (64-bit floating point).
> JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be
> represented by a normal JavaScript Number.[^8]

Each of these primitive types has a corresponding Object Wrapper types, which add useful methods of working with
primitive types alongside object types. For example, the primitive type `number` has an Object Wrapper Type of
`Number` which allows for useful operations using methods like `toExponential()`.[^6]

There are two more primitive types that are slightly more complicated. These are:

| Type      | Example                                               | Not the Same as Empty[^8]                      |
|-----------|-------------------------------------------------------|------------------------------------------------|
| undefined | `const dog; // Value is undefined, type is undefined` | `let car = ""; // Value is "", type is string` |
| null      |                                                       |

The null type holds one value: `null`. The undefined type holds one value: `undefined`. These types represent an
absence, rather than presence, of a value. The main difference lies in that `undefined` represents the lack of a value
while`null` represents the lack of an object.

For this reason, if you were to use the `typeof` operator on the null type it would return "object", because it
represents the absence of such an object. However, neither of these types have a corresponding Object Wrapper type.[^6]

[^6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

[^8]: https://www.w3schools.com/js/js_datatypes.asp

### The Object Data Type

The last data type in JavaScript is the Object type. This is a kind of variable that can hold many values. Objects
can be declared with an object literal, such as below:

```
const person = {
    firstName: "Amelia", 
    lastName: "Pond"
    };
```

This means listing the properties of the object using `key:value` pairs (this may seem
familiar if you've used Dictionaries in Python). You can also declare a new Object using the keyword `new`:

```
const person = new Person();
```

In JavaScript, an Object type can also contain an array (list) or a date.

| Type      | Example                                                 |
|-----------|---------------------------------------------------------|
| An object | `const person = {firstName:"Donna", lastName:"Noble"};` |
| An array  | `const fruits = ["apple", "banana", "orange"];`         |
| A date    | `const date = new Date("2023-11-23");`                  |

> [!TIP]
> Notice that while a Date object requires the keyword `new`, arrays do not.

## Operators

#### Arithmetic Operators

These operators are used to perform arithmetic on numbers/variables containing numbers.

| Symbol | Operation                    |
|--------|------------------------------|
| +      | Addition                     |
| -      | Subtraction                  |
| *      | Multiplication               |
| **     | Exponentiation               |
| /      | Division                     |
| %      | Modulus (Division Remainder) |
| ++     | Increment                    |
| --     | Decrement                    |

> [!NOTE]
> Adding two variables of the number type will return the sum, but adding a number and a string will return a
> concatenated string, even if the string contains a number, such as shown below:

```
let addInt = 5 + 5; // returns: 10
let addString = "5" + 5; // returns: "55"
```

#### Assignment Operators

These operators are used to assign a value to a variable.[^8]

| Symbol | Operation                                                              | Example     | Same Operation As |
|--------|------------------------------------------------------------------------|-------------|-------------------|
| =      | Assign a value to a variable                                           | `let x = 5` |                   |
| +=     | Add a value to a variable and assign the answer to the variable        | `x += 1`    | `x = x + 1`       |
| -=     | Subtract a value from a variable and assign the answer to the variable | `x -= 2`    | `x = x - 2`       |
| *=     | Multiply a variable by a value and assign the answer to the variable   | `x *= 5`    | `x = x * 5`       |
| /=     | Divide a variable by a value and assign the answer to the variable     | `x /= y`    | `x = x / y`       |
| %=     | Modulus operation (and assign the answer to the variable)              | `x %= y`    | `x = x % y`       |
| **=    | Exponentiation operation (and assign the answer to the variable)       | `x **= 3`   | `x = x ** 3`      |

#### Comparison Operators

These (and logical operators below) are used to determine if a statement is `true` or `false`.[^8].[^9]

| Symbol | Operation                             |
|--------|---------------------------------------|
| ==     | equal to                              |
| ===    | equal value **and** equal type        |
| !=     | not equal                             |
| !==    | not equal value **or** not equal type |
| \>     | greater than                          |
| <      | less than                             |
| \>=    | greater than **or** equal to          |
| <=     | less than **or** equal to             |
| \>?    | ternary operator (see below)          |

#### String Operators

The above comparison operators can also be used on strings. However, strings will be compared alphabetically.[^8]

[^8]: https://www.w3schools.com/js/js_operators.asp

#### Logical Operators

These operators are also used to determine if a statement is `true` or `false`. These add a layer to comparison
operators by allowing you to evaluate multiple expressions at a time as well as how they relate to each other.[^9]

| Symbol | Operation   | Example                                                                              |
|--------|-------------|--------------------------------------------------------------------------------------|
| &&     | logical and | `if (x==y && a==b) { // if x equals y AND a equals b`<br/>`// do some code`<br/>`}`  |
| \|\|   | logical or  | `if (x==y \|\| a==b) { // if x equals y OR a equals b`<br/>`// do some code`<br/>`}` |
| !      | logical not | `if (x != y) { // if x DOES NOT equal y`<br/>`// do some code`<br/>`}`               |

For example, you can evaluate each of the following expressions separately:

``` 
if (x == y) // expression one

if (a == b) // expression two
```

Logical operators allow you to evaluate both in one step and make decisions based on which one(s) is/are true:

``` 
if (x==y && a==b) // if both expressions are true

if (x==y || a==b) // if at least one of the expressions is true
```

The Logical Not operator can be used to negate the return value of a boolean function:

```
const aVariable = 5;
if (isNaN(aVariable)) // returns false --> aVariable is a number

if (!isNaN(aVariable)) // returns true --> isNaN() returns false, which is negated by the Logical Not operator
```

#### The typeof Operator

This operator returns the type of variable, object, function or expression:

``` 
const thisVar = "Hello";
console.log(typeof thisVar); // output: string
```

#### Bitwise Operators[^10]

| Operator	 | Name	                 | Description                                                                                              |
|-----------|-----------------------|----------------------------------------------------------------------------------------------------------|
| &         | AND                   | Sets each bit to 1 if both bits are 1                                                                    |
| \|        | OR                    | Sets each bit to 1 if one of two bits is 1                                                               |
| ^         | XOR                   | Sets each bit to 1 if only one of two bits is 1                                                          |
| ~         | NOT                   | Inverts all the bits                                                                                     |
| <<        | Zero fill left shift  | Shifts left by pushing zeros in from the right and let the leftmost bits fall off                        |
| \>\>      | Signed right shift    | Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off |
| \>\>\>    | Zero fill right shift | Shifts right by pushing zeros in from the left, and let the rightmost bits fall off                      |

[^10]: https://www.w3schools.com/js/js_bitwise.asp

#### Ternary Operator

JavaScript contains a conditional operator called a _ternary operator_ which assigns a value to a variable based on
some condition.[^9] The syntax for this looks like `variablename = (condition) ? value1:value2`. Here is an example:

```
const heightSafety = (height < 48) ? "Too short for safety":"Tall enough to ride";
```

[^9]: https://www.w3schools.com/js/js_comparisons.asp