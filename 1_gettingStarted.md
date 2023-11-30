# Getting Started

## What Do I Need?

### A Web Browser with JavaScript Enabled

The first step to programming with JavaScript is to have a working web browser with JavaScript enabled. I will be using
Safari, which comes built in on Mac computers (which I'm using). Other popular browsers include Google Chrome[^1] and
Mozilla Firefox[^2]. Windows machines come built in with Microsoft Edge. There is no need to download the JavaScript
language itself, however, which might seem unusual compared to some languages like Python or Java.

[^1]: https://www.google.com/chrome/

[^2]: https://www.mozilla.org/en-US/firefox/new/

In your web browser, JavaScript is able to access the Document Object Model (DOM), which is a programming interface
for web documents.[^3] In simpler terms, the DOM allows JS to access and change elements in an HTML document. When a web
page is loaded in your browser, the browser creates a Document Object Model of the page.[^4] This model allows
JavaScript to create **dynamic** HTML. JavaScript can create, edit, or remove any HTML elements, attributes, or events
within the page. It can also change the style of the page by editing all the CSS styles within the page.

[^3]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

[^4]: https://www.w3schools.com/js/js_htmldom.asp

### Download Node.js

You also want to download Node.js by following the link [here](https://nodejs.org/en/download) and downloading the
correct installer for your platform. Open the installer from your Downloads folder (or wherever you save your downloads)
and follow the instructions. More information about Node.js can be found [here](https://nodejs.org/en/about) and
documentation can be found [here](https://nodejs.org/en/docs).

**What is Node.js?**

Node.js is an open-source, cross-platform runtime environment[^5], which allows JavaScript to run without using a
browser.
Sound confusing? Let's break it down.

__Open source:__ Node.js is available publicly for free and maintained by contributors around the world, rather than one
specific company.

__Cross-platform:__ Node.js runs on Windows, Linux, Unix, macOS, etc. and is not limited to one operating system.

__Runtime environment:__ This just means that that Node.js allows you to run your code. Without it, you would need to
use a browser to run your JavaScript code because browsers come with the built-in ability to execute JS code.

[^5]: https://www.freecodecamp.org/news/what-is-node-js/

Node.js allows JavaScript to be utilized in another way. While JavaScript is traditionally used
for web programming, meaning it is run on the **client-side** to create dynamic web content, Node.js was created to
expand the use of JS to running on the server-side. While Node.js allows for server-side programming, it is useful
for us because it allows us to run code using our IDE, rather than by opening it in our browser. It will be useful
for understanding concepts in JS.

### Integrated Developer Environment

Next, we need to install a program that will let us write code and run it. The easiest way to do this is using an
Integrated Developer Environment, or IDE. And IDE allows us to write code, run code, and debug code all in one program,
which makes it really handy. I've chosen to use IntelliJ IDEA, which is available through free educational access.
Learn more [here](https://www.jetbrains.com/community/education/#students).
Another IDE available for free is Visual Studio Code (VSCode) which can be
downloaded [here](https://code.visualstudio.com/download).
___

## Your First Program

I have created a folder of sample code files, which can be found [here](/codeFiles/). To start, download the folder of
sample files. Once you've done that, try opening helloWorld.js in your IDE. The first line should look like this:

`
console.log("Hello World!");
`

If you run this, it will display the words "Hello World!" in the terminal/console. This is where Node.js comes in--it
allows us to run JavaScript without needing a browser.

However, JavaScript is especially useful for use in web development. There is another sample code file called
helloWorld.html. It looks like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
<p id="s">"This is a sentence."</p>
<script>
    document.getElementById("s").innerHTML = "Hello World!";
</script>
</body>
</html>
```

In this example, you can see how adding "script" tags in an html file allows you to use javascript to edit
the webpage.

**How do we write comments in JavaScript?**

Two forward slashes indicate a single-line comment in JavaScript, as seen below:

`
// This is a comment in JavaScript
`

A comment can also contain multiple lines. A multi-line comment is indicated by a forward slash followed by an asterisk.
The end of the comment is indicated with an asterisk followed by a forward slash.

`
/* This is also a comment in JavaScript */
`

Any lines within the multi-line comment indicators must include an asterisk at the beginning of the line:

```
/* This comment
* has multiple lines.
*/ 
```

