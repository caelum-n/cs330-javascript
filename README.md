Programming language project for CS330 at Simmons University (Fall 2023)

# A Guide to JavaScript
***
## Table of Contents
- [Introduction to JavaScript](##introduction-to-javascript)
- [Helpful Resources](##helpful-resources)
- [Getting Started Yourself](##getting-started)
- [Data Types](#data-types)

___
## Introduction to JavaScript

### What Is JavaScript?

JavaScript, or JS, is one of several programming languages at the core of website design and function. It is frequently used in conjunction with HTML and CSS and should not be confused with [Java](https://www.java.com/en/download/help/whatis_java.html), which is its own language. JavaScript is used on the client side by over 98% of websites for webpage behavior, often with third-party libraries. Since this language is so prevalent, all major web browsers include a dedicated JavaScript engine to ensure code runs on users' devices.

### What's It Used For?

JavaScript is used in many more ways today than ever. Historically, Java had been used primarily on the client side to add scripted behavior. It remains the dominant client-side language of the web. However, after the [creation of Node.js in 2009], JavaScript usage began to spread outside of browser usage.

Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on.

### What is Node.js?

Node.js was created in 2009 by Ryan Dahl

### A Brief History 

JS was invented in 1995 by [**Brendan Eich**](/moreInfo.md#a-less-brief-history), who was hired by the Netscape Corporation to embed a scripting language in their browser, Navigator. Navigator was one of the first popular web browsers with a Graphical User Interface (GUI), allowing web browsing to spread through much wider, non-technical circles. Eich was originally hired to embed the programming language Scheme into Navigator, but it was soon decided that Eich would develop a new scripting language more similar to the Java programming language, instead of extant scripting languages like Scheme. Thus, LiveScript was born--and then it became JavaScript.

Source: [JavaScript Wiki](https://en.wikipedia.org/wiki/JavaScript)

___
## Helpful Resources 
### Programming in JavaScript
- JavaScript documentation:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [devdocs.io](https://devdocs.io/javascript/)
- [w3schools](https://www.w3schools.com)

___
## Getting Started

### What Do I Need?

**A Web Browser with JavaScript Enabled**

The first step to programming with JavaScript is to have a working web browser with JavaScript enabled. There is no need to download the language itself, however, which might be unusual if you've ever come across Python or Java and had to download or update either of them.

**Downloading Node.js**

You also want to download Node.js by following the link [here](https://nodejs.org/en/download) and downloading the correct installer for your platform. Open the installer from your Downloads folder and follow the instructions. More information about Node.js can be found [here](https://nodejs.org/en/about) and documentation can be found [here](https://nodejs.org/en/docs).

**Integrated Developer Environment**

Next, we need to install a program that will let us write code and run it. The easiest way to do this is using an Integrated Developer Environment, or IDE. And IDE allows us to write code, run code, and debug code all in one program, which makes it really handy. I've chosen to use Visual Studio Code. VSCode can be downloaded [here](https://code.visualstudio.com/download) for MacOS, Windows, and Linux. Documentation can be found [here](https://code.visualstudio.com/docs) and you can read more from the [FAQ, here](https://code.visualstudio.com/docs/supporting/faq). I will be using VSCode throughout this project.

<!-- **Text Editor and Browser** -->

## Your First Program

I have created a folder of sample code files, which can be found [here](/codeFiles/). To start, download the folder of sample files. There should be 2 files in the folder. They are called:
- helloWorld.js
- hello.html

## How do you run programs in JavaScript?

## Comments

Comments are an important part of any programming language. Comments are pieces of text which are ignored when the code is run. They serve to communicate what different chunks of code do, or otherwise tell humans reading the comments information not as easily discerned by looking at the code alone.

Comments can also be used when writing a program to make the program ignore parts of the code. This can help determine the source of an error or misbehaving code.

**How do we write comments in JavaScript?**

Two forward slashes indicate a single-line comment in JavaScript, as seen below:

`// This is a comment in JavaScript`

A comment can also contain multiple lines. A multi-line comment is indicated by a forward slash followed by an asterisk. The end of the comment is indicated with an asterisk followed by a forward slash. 

`/* This is also a comment in JavaScript */`

Any lines within the multi-line comment indicators must include an asterisk at the beginning of the line:


```/* This comment
* has multiple lines.
*/ ```






# Data Types

## What are variables?
## Types of variables 
    
Write a piece of code that creates variable of each of these common data types (where possible) and follows the naming conventions:
- int
- string
- floating-point number
- boolean
- array/list
- dictionary (sometimes called a hash or a map, depending on your language)

## Good Practices 
naming conventions in your language for variables
  are they case sensitive? 
  do they have to start with lower case letters? 
  Can they start with numbers? Symbols? 
  do programmers use underscores, as in "last_name", 
    or do they use camel case (lastName)?

Note that not all languages will have all of these built-in types, and some might have other primitive types (for example, most C-family languages have pointers). 
    If your language has other primitive types or doesn’t include some of the above types, modify your code as necessary.

In your example code, illustrate the important data type and operations features in your language.
  Write code that experiments with different operations applied on variables of the same data type and operations with variables of two different types: e.g. 
    can you add ints and floats? 
    Is the resulting variable an int (narrowing conversion) or a float (widening conversion)? 
    What about division? 
    Can you put different data types in the same array or list? 
    Can one data type be converted to another either implicitly or explicitly (int to float, string to int, etc)?

Discussion questions:
1. Does your language have keywords or reserved words? How many?
2. What are the naming requirements for variables in your language?
What about naming conventions? Are those enforced by the compiler/interpreter, or just
standards in the community?
3. Is your language statically or dynamically typed?
4. Strongly typed or weakly typed?
5. Explicitly typed or implicitly typed?
6. Are some variables mutable while others are immutable?
7. What are the operators available for each data type?
8. Are mixed type operations allowed? If so, how are they accommodated?
9. At what point are identifier names and operator symbols bound in your language? For example
if you declare a (variable, class name, function name), when is it bound to the type, address? When are operators (+,*, etc.) bound to their operations?
CODING EXAMPLE demonstrating the features above
1 Adapted with permission from Dr. Amber Stubbs
   
EXAMPLE OF (one) ILLUSTRATIVE EXAMPLE:
If you put this line (or something similar) in a program and try to print x, what does it do?
x = "5" + 6
If it doesn't compile, why? Is there something you can do to make it compile?
10. Describe the limitations (or lack thereof) of your programming language as they relate to the coding example portion of the assignment (adding ints and floats, storing different types in lists, converting between data types). Are there other restrictions or pitfalls that the documentation mentions that you need to be aware of?
11. Are there built-in complex data types that are commonly used in your language? (hint: they’d probably appear fairly early in the documentation if so)

