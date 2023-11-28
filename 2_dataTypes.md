# Data Types In JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

## What are variables?

In general, a variable is a placeholder for a value. As the name suggests, we use placeholders because the value can _
_vary__ or change in different scenarios.

In the natural sciences, variables refer to any factor in an experiment that a scientist may control and change in
specific ways. In math, variables represent mathematical objects[^4]--so, numbers, sets of numbers, functions,
expressions, and other fun math stuff. In very general terms, mathematicians use variables to understand patterns.

[^4]: https://en.wikipedia.org/wiki/Variable_(mathematics)

In programming, variables are used to label and store data in computer memory for future use. You can think of them as
containers for storing information you might need later. For example, we might want to store two numbers, so later in
the program we can add them together.

```
num1 = 10;
num2 = 15;

sum = num1 + num2; // calculate sum of num1 & num2
console.log(sum); // display sum
```

## Declaring variables

JavaScript is a **dynamically typed** language, which means that

There are four ways to declare a variable in JS.

Automatically
Using var
Using let
Using const

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

### var

### let

### const

### Types of variables

Write a piece of code that creates variable of each of these common data types (where possible) and follows the naming
conventions:

- int
- string
- floating-point number
- boolean
- array/list
- dictionary (sometimes called a hash or a map, depending on your language)

6. Are some variables mutable while others are immutable?
7. What are the operators available for each data type?
8. Are mixed type operations allowed? If so, how are they accommodated?
9. At what point are identifier names and operator symbols bound in your language? For example
   if you declare a (variable, class name, function name), when is it bound to the type, address? When are
   operators (+,*, etc.) bound to their operations?

## Good Practices

https://www.w3schools.com/js/js_variables.asp
naming conventions in your language for variables
are they case sensitive?
do they have to start with lower case letters?
Can they start with numbers? Symbols?
do programmers use underscores, as in "last_name",
or do they use camel case (lastName)?

Note that not all languages will have all of these built-in types, and some might have other primitive types (for
example, most C-family languages have pointers).
If your language has other primitive types or doesn’t include some of the above types, modify your code as necessary.

In your example code, illustrate the important data type and operations features in your language.
Write code that experiments with different operations applied on variables of the same data type and operations with
variables of two different types: e.g.
can you add ints and floats?
Is the resulting variable an int (narrowing conversion) or a float (widening conversion)?
What about division?
Can you put different data types in the same array or list?
Can one data type be converted to another either implicitly or explicitly (int to float, string to int, etc)?

### Reserved words

### Naming Variables

**Requirements**
**Conventions**
What about naming conventions? Are those enforced by the compiler/interpreter, or just
standards in the community?

### Typing Style

3. Is your language statically or dynamically typed?
4. Strongly typed or weakly typed?
5. Explicitly typed or implicitly typed?

CODING EXAMPLE demonstrating the features above

EXAMPLE OF (one) ILLUSTRATIVE EXAMPLE:
If you put this line (or something similar) in a program and try to print x, what does it do?
x = "5" + 6
If it doesn't compile, why? Is there something you can do to make it compile?

10. Describe the limitations (or lack thereof) of your programming language as they relate to the coding example portion
    of the assignment (adding ints and floats, storing different types in lists, converting between data types). Are
    there other restrictions or pitfalls that the documentation mentions that you need to be aware of?
11. Are there built-in complex data types that are commonly used in your language? (hint: they’d probably appear fairly
    early in the documentation if so)

> [!WARNING]
> EDIT SECTION