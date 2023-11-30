# Data Types In JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

## Let's Review Variables

In programming, variables are used to label and store data in computer memory for future use. You can think of them as
containers for storing information you might need later. For example, we might want to store two numbers, so later in
the program we can add them together.

```
num1 = 10;
num2 = 15;

sum = num1 + num2; // calculate sum of num1 & num2
console.log(sum); // display sum
```

### Reserved words

| abstract     | arguments      | await            | boolean       |
|--------------|----------------|------------------|---------------|
| **break**    | **byte**       | **case**         | **catch**     |
| **char**     | **class**      | **const**        | **continue**  | 
| **debugger** | **default**    | **delete**       | **do**        |
| **double**   | **else**       | **enum**         | **eval**      |
| **export**   | **extends**    | **false**        | **final**     |
| **finally**  | **float**      | **for**          | **function**  |
| **goto**     | **if**         | **implements**   | **import**    |
| **in**       | **instanceof** | **int**          | **interface** |
| **let**      | **long**       | **native**       | **new**       |
| **null**     | **package**    | **private**      | **protected** |
| **public**   | **return**     | **short**        | **static**    |
| **super**    | **switch**     | **synchronized** | **this**      |
| **throw**    | **throws**     | **transient**    | **true**      |
| **try**      | **typeof**     | **var**          | **void**      |
| **volatile** | **while**      | **with**         | **yield**     |

Keywords in any language can and do change as the language is updated. The words listed below have been removed as
reserved words in ECMAScript 5/6, but should not be used as variable names because not all browsers support the
newest version. Using these older keywords can still cause errors if they are used and then the code is run on an
older browser.

| abstract         | boolean    | byte          | char         |
|------------------|------------|---------------|--------------|
| **double**       | **final**  | **float**     | **goto**     |
| **int**          | **long**   | **native**    | **short**    |
| **synchronized** | **throws** | **transient** | **volatile** |

https://www.w3schools.com/js/js_reserved.asp

### Naming Variables

**Requirements**
**Conventions**
What about naming conventions? Are those enforced by the compiler/interpreter, or just
standards in the community?

## Declaring variables

There are four ways to declare a variable in JS.

- Automatically (implicitly)
- Using var
- Using let
- Using const

Although JavaScript allows implicitly declared variables, it is a good idea to always declare variables. In fact,
here are some good rules of thumb when it comes to variables in JavaScript:

1. Always declare variables
2. Always use const if the **value** should not be changed
3. Always use const if the **type** should not be changed _(Arrays and Objects)_
4. Only use let if you can't use const
5. Only use var if you need to support old browsers

_When in doubt, declare your variable with **const**_.

## Type Style

JavaScript is a **dynamically typed** language, which means that _type checking_ (the process of verifying and
enforcing the constraints of a variable's type on its value(s)) of a program is checked at runtime. This differs
from a **statically typed** language, where type checking happens at compile time. Python is another example of a
dynamically typed language.

JavaScript is also a **weakly typed** language. Weakly-typed languages convert between unrelated types implicitly.
On the other hand, a **strongly-typed** language requires explicit conversions between unrelated types. An
example, shown below, is that JavaScript allows you to assign an integer to a variable that currently holds a string.

| JavaScript                                                     | Java                                                                                           |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| ```// allowed code ```<br/>```let x = "6";```<br/>```x = 2 ``` | ```// to do the same in Java```<br/>```String x = "6"```<br/>```int y = Integer.parseInt(x)``` |

You can also see in the example below that JS allows implicit type conversions. Using console.log(), we can print
the variable's data type first after assigning a string and then after reassigning a number and view the difference.

```
let x = "5";
console.log(typeof x) // output: string
x = 5
console.log(typeof x) // output: number```
```

Lastly, JavaScript is **implicitly typed**, meaning there are no explicit declarations of the data type of a variable.
In simpler terms, one declares both a string and an int using "const".

``` 
// both string and int declared with "const"
const x = "6";
const y = 2
```

### Data Types

All data types in JavaScript can be categorized into two groups: **Primitive** types and **Reference** types.

JavaScript has seven primitive (not an object) types. All primitive types are immutable. The types are:

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

### Operators

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
concatenated string, even if the string contains a number, such as shown below:


#### Assignment Operators

These operators are used to assign a value to a variable.

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

These (and logical operators below) are used to determine if a statement is `true` or `false`.

| Symbol | Operation                             |
|--------|---------------------------------------|
| ==     | equal to                              |
| ===    | equal value **and** equal type        |
| !=     | not equal                             |
| !==    | not equal value **or** not equal type |
| >      | greater than                          |
| <      | less than                             |
| >=     | greater than **or** equal to          |
| <=     | less than **or** equal to             |
| >?     | ternary operator                      |

#### Logical Operators

#### String Operators

#### Bitwise Operators

#### Ternary Operators

#### Type Operators

https://www.w3schools.com/js/js_operators.asp

8. Are mixed type operations allowed? If so, how are they accommodated?

JavaScript does have two mutable variables:

- array/list
- dictionary (sometimes called a hash or a map, depending on your language)


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

illustrate the important data type and operations features
experiments with different operations applied on variables of the same data type
and operations with variables of two different types: e.g.
can you add ints and floats?
Is the resulting variable an int (narrowing conversion) or a float (widening conversion)?
What about division?
Can you put different data types in the same array or list?
Can one data type be converted to another either implicitly or explicitly (int to float, string to int, etc)?

Conclusion

- Limitations
    - Describe the limitations (or lack thereof) of your programming language as they relate to the coding example
      portion of the assignment (adding ints and floats, storing different types in lists, converting between data
      types). Are there other restrictions or pitfalls that the documentation mentions that you need to be aware of?

Are there built-in complex data types that are commonly used in your language? (hint: they’d probably appear fairly
early in the documentation if so)