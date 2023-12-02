# Functions in JavaScript

https://www.w3schools.com/js/js_functions.asp
Being able to repeat code through loops and functions (which can be called more than once and sent different information
each time) is a huge part of most programming languages. However, different programming languages have different kinds
of loops, and there are a lot of variations in how functions are declared, where they have to be put, how they accept
parameters, and how the function output is returned. In your programming language, do the following (or explain why it
can’t be done as described):

To make a function you use the function keyword followed by the function name and then parameters inside parenthesis.
Functions can only run when they are in scope. Javascript does support recursive functions. Functions can accept
multiple variables within parameters, in the parentheses separated by commas. They also can be different data types. You
can also return multiple values in the return statement by separating them with commas. Javascript functions are passed
by value ( functions know values, not the location of the value). Javascript has global variables (declared outside the
function) and local variables (declared inside the function). When Variables are declared their lifetime starts. When it
is a global variable they only die when the web browser is closed. When it is a local variable they die when the
function is completed. Local variables are also stored on the stack until the function has run.

## loops

### while

### do/while

### for

### foreach

Write a function that takes in two numbers, multiplies them, and returns the output

## Recursion

Write a recursive function (one that calculates a factorial is fine)

## Splitting strings

Write a function that takes in a string (or your language's equivalent) and splits it into two
strings, then returns both strings

Call your functions and save the results of the function calls in variables.

Write a function that tests whether your language is pass-by-reference or pass-by-value.
For your write-up, address the following items:

1. Does your language include multiple types of loops (while, do/while, for, foreach)? If so, what are they and how do
   they differ from each other?
2. What is the syntax for declaring a function in your language?
3. Are there any rules about where the function has to be placed in your code file so that it can run?
4. Does your language support recursive functions?
5. Can functions in your language accept multiple parameters? Can they be of different data types?
6. Can functions in your language return multiple values at the same time? How is that implemented? If not, are there
   ways around that problem? What are they?
7. Is your language pass-by reference or value? Check your code against outside sources in case there is anything tricky
   going on (like in Perl).
8. Where are the arguments, parameters and local variables stored (value-on-stack, ref-to-heap-on stack) during
   execution?
9. What are the scoping rules in your language (visibility and lifetime of variables before, during and after code
   blocks)? Are loop code block variables treated differently than function code blocks?
10. Are side-effects possible? Are there guard rails against side-effects?
    11.Where are local Are there any other aspects of functions in your language that aren't specifically asked about
    here, but that are important to know in order to write one? What are they? (e.g. dynamic vs static scope)

If your language doesn't support anything like this, then explain why not and what it does instead (feel free to check
in with me on this if you aren't sure what your language does).

As always, write out the answers to these questions as though you were writing a guide for a new learner. Make your
answers as clear as possible, use code as examples and don't just answer the questions in one or two words. Explain the
reasoning behind the answers as much as possible. If there is no clear-cut answer to a question, explain why not. And
cite your sources!

Post both your code and your tutorial/ answers in your github repo, and be prepared to run your code for me in lab.