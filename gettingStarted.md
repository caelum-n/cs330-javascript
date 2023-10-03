## Getting Started

### What Do I Need?

**A Web Browser with JavaScript Enabled**

The first step to programming with JavaScript is to have a working web browser with JavaScript enabled. I will be using Safari, which comes built in on Mac computers (which I'm using). Other popular browsers include Google Chrome[^2] and Mozilla Firefox[^3]. Windows machines come built in with Microsoft Edge.

[^2]: https://www.google.com/chrome/
[^3]: https://www.mozilla.org/en-US/firefox/new/

There is no need to download the JavaScript language itself, however, which might be unusual for some Python or Java users.

**Downloading Node.js**

You also want to download Node.js by following the link [here](https://nodejs.org/en/download) and downloading the correct installer for your platform. Open the installer from your Downloads folder (or wherever you save your downloads) and follow the instructions. More information about Node.js can be found [here](https://nodejs.org/en/about) and documentation can be found [here](https://nodejs.org/en/docs).

**Integrated Developer Environment**

Next, we need to install a program that will let us write code and run it. The easiest way to do this is using an Integrated Developer Environment, or IDE. And IDE allows us to write code, run code, and debug code all in one program, which makes it really handy. I've chosen to use Visual Studio Code. VSCode can be downloaded [here](https://code.visualstudio.com/download) for MacOS, Windows, and Linux. Documentation can be found [here](https://code.visualstudio.com/docs) and you can read more from the [FAQ, here](https://code.visualstudio.com/docs/supporting/faq). I will be using VSCode throughout this project.

<!-- **Text Editor and Browser** -->
___
## Your First Program

I have created a folder of sample code files, which can be found [here](/codeFiles/). To start, download the folder of sample files. There should be 2 files in the folder. They are called:
- helloWorld.js
- hello.html

### How do you run programs in JavaScript?

### Comments

Comments are an important part of any programming language. Comments are pieces of text which are ignored when the code is run. They serve to communicate what different chunks of code do, or otherwise tell humans reading the comments information not as easily discerned by looking at the code alone.

Comments can also be used when writing a program to make the program ignore parts of the code. This can help determine the source of an error or misbehaving code.

**How do we write comments in JavaScript?**

Two forward slashes indicate a single-line comment in JavaScript, as seen below:

`
// This is a comment in JavaScript
`

A comment can also contain multiple lines. A multi-line comment is indicated by a forward slash followed by an asterisk. The end of the comment is indicated with an asterisk followed by a forward slash. 

`
/* This is also a comment in JavaScript */
`

Any lines within the multi-line comment indicators must include an asterisk at the beginning of the line:


```
/* This comment
* has multiple lines.
*/ 
```