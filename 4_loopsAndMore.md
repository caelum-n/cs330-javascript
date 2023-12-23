
## Loops

One way functions can be particularly useful is by allowing easy repetition of various chunks of code. These chunks
of code "loop" through their tasks a certain number of times or until a condition is met. A loop has similar syntax,
minus the keyword `function`. Let's look at some examples.

### While Loops

A while loop repeats a block of code, as long as a specified condition is met.[^2] For example, maybe we have a list of
fruits and would like to repeat our code so long as the list is _not_ empty.

```
fruits = ["apple", "banana", "orange"];
while (!fruits.isEmpty()) {
    // do some code to remove a fruit
}
```

The above code uses the logical not symbol `!` to determine whether our list is empty. If not, it repeats itself.
However, it will end when we finally remove all the fruits. The downside to while loops is that it's easy to
accidentally create an infinite loop. If we don't correctly remove each fruit, the list will never be empty and our
program will repeat forever, unable to exit this loop.

Another variation of a while loop includes a `do {}` statement. In this variation, the loop will execute the code
block once first before checking if the condition is met. Then, it will repeat the loop while the condition is met.
This can be useful in cases where the first loop may need to execute before the condition is actually met, and
wherein the loop itself ensures the condition is met.[^2]

[^2]: https://www.w3schools.com/js/js_loop_while.asp

``` 
do {
  // code to execute
}
while (condition);
```

### For Loops

For loops iterate through a block of code a specified number of times.

In JavaScript, a `for` statement creates a loop with 3 optional expressions as parameters, as shown below:

```
for (expression 1; expression 2; expression 3) {
    // code block to be executed
}
```

The first parameter is executed once before the execution of the code block. The second parameter defines the
condition for executing the code block. The third is executed after each loop. Here's an example of what this looks
like in practice:

``` 
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Expression 1: `let i = 0;` _executed first; defines i as 0_

Expression 2: `i < 5;` _defines condition for loop; while i < 5, the loop repeats_

Expression 3: `i++;` _executed every time the code block has finished a loop; increments i by one_

There are two variations of for loops.

`for/in` is a loop specific used with objects to iterate through the object's properties

```
const person = {fname:"Rory", lname:"Williams"};

let text = "";
for (let x in person) {
  text += person[x];
}
```

`for/of` loops are similar, but used to loop through the values of an iterable object, such as our list of fruits
from the earlier example of `while` loops.

```
fruits = ["apple", "banana", "orange"];
for (f in fruits) {
    console.log(f);
}
```

### foreach

## Recursion
Now that you know about the data types in your programming language, it's time to start actually using them. Find out
how the following control statements are written in your language, and write an example of each. If your language
doesn't support these control statements specifically (for example, not all languages have switch statements), try to
find a way to emulate the behavior in other ways

- a one-condition if/else statement (i.e. "if x == true")
- a multi-condition if/else statement (i.e. "if x>0 && y< 10)
- if/elif/else statements
- short-circuit logic
- a switch-case statement

For your write-up, answer the following questions:

1. What are the boolean values in your language? (e.g., True and False, true and false, 1, and 0, etc.)
2. What types of conditional statements are available in your language? (if/else, if/then/else, if/elseif/else). Does
   your language allow for statements other than “if” (for example, Perl has an “unless” statement, which does the
   opposite of “if”!)
3. How does your language delimit code blocks under each condition in selection control statements?
4. Does your language use short-circuit evaluation? Include an example of the short-circuit logic working or not
   working (or both, if your language is like Java and supports both!)
5. How does your programming language deal with the “dangling else” problem?
6. If your language supports switch or case statements, do you have to use “break” to get out of them? Can you use
   “continue” to have all of the conditions evaluated?
7. Does your language include multiple types of loops (while, do/while, for, foreach)? If so, what are they and how do
   they differ from each other?
8. Are loop code block variables treated differently than function code blocks?

If your language doesn't support anything like this, then explain why not and what it does instead (e.g. the functional
languages. Feel free to check in with me on this if you aren't sure what your language does).

You should incorporate code into your tutorial to show examples, and you should have a file in your repository that is
just commented code, that demonstrates how all of these FoPC statements are written in your language. This should be a
file that someone could download and run.