# Functions in JavaScript
---

## Syntax

To write a function in JavaScript, you first define use the `function` keyword, followed by the function name,
followed by parentheses `()`. Function names follow the same rules as variables.[^1]

For any functions which takes input parameters, you can define these inside the parentheses by including parameter
names separated by commas. Inside the function, these parameters behave as local variables.[^1]

After the parentheses, the code to be executed is surrounded in curly brackets.[^1]

As a generic formula, those rules look something like this:

```
function funcName(param1, param2) {
    // code to run when function is called
}
```

Here is a more specific example which takes 2 numbers as parameters and adds them together.

```
function mult(num1, num2) {
    return num1 * num2;
}
```

In the above statement, the product of the two given numbers is returned from the function. When JavaScript reaches a
return statement, the function will stop executing and "return" to the place in the code from where the function was
called. The value which is returned back to whichever element called the function can be used for later code.[^1]

[^1]: https://www.w3schools.com/js/js_functions.asp

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