/* JS data types
- strings 
- numbers
- boolean
- null 
- undefined 
- symbols
*/

/* What is the difference between null and undefined?
null - intentionally set to no object value 
undefined - indicates an uninitialized variable 
*/

/* the DOM (DOCUMENT OBJECT MODULE)
interface that represents the structure of HTML and XML.
allows JS to access and manipulate the content and the structure of the webpage.
*/

/* Events in JS
- an event is an action that happens in the browser, such as button clicks or page load.
JS can respond to these events by executing code.
*/

// Anonymous function example:
const greet = function() {
    console.log("Hello, World!");
}

greet(); // Outputs: Hello, World!

// Using an anonymous function with Array's forEach method
[2,4,6].forEach(function(number) {
    console.log(number * 2);
}); // Outputs: 4, 8, 12

// the same function using arrow function 
[2, 4, 6].forEach(number => console.log(number * 2));
// Outputs: 4, 8, 12

// Closure example:
/* a closure is a function that remembers its outer variables and can access them
Closures are created every time a function is created, at function creation time */
function createGreeting(greetingPrefix) {
    return function(name) {
        console.log(greetingPrefix + ', ' + name);
    };
}

const sayHello = createGreeting('Whats Up')
const sayGoodbye = createGreeting('See ya later')

sayHello('Will'); // Output: Whats Up, Will
sayGoodbye('Dylan'); // Output: See ya later, Dylan

/* note the difference in == and ===
== - looks for the type 
=== - looks for type and value 
*/

/* Hoisting in JS
JS behavior where variable and function declarations are moved to the top
of their containing scope during the compilation phase. */

/* the `this` keyword in JavaScript example:
 `this` keyword refers to the object that is currently executing code. its value
 is determined by how a function is called. */ 
/* 
In a method, `this` refers to the owner object.
Alone, `this` refers to the global object.
In a function, `this` refers to the global object.
In a function in strict mode, `this` is `undefined`
In an event, `this` refers to the element that received the event. */

const person = {
    firstName: 'Billy',
    lastName: 'Goat',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // Output: Billy Goat 

function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

const persons = new Person1("Jim", "Huckberry");
console.log(persons.fullName()); // Output: Jim Huckberry

// Different ways to define a function 
// function declarations -
function greet1() {
    console.log("Hello, World!");
};
greet1(); // Calling the function

// function expressions - can be stored in a variable, the function can be anonymous or named.
const sayBigHello = function() {
    console.log("Hello, Big World!");
};
sayBigHello(); // Hello, Big World!

// arrow functions - introduced in ES6, arrow functions allow for shorter syntax for writing functions.
const add = (a,b) => a + b;

console.log(add(5,3)); // 8

// methods within objects - methods are functions that are stored as object properties.
const person2 = {
    firstName: 'Flynn',
    lastName: 'Fly',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    // ES6 shorthand method
    greet2() {
        console.log('Hello!');
    }
};
console.log(person2.fullName()); // Flynn Fly
person2.greet2();
// In methods, `this` refers to the object the method belongs to. 

/* `let` keyword is used to declare block-scoped variables. Variables declared with let are only accessible 
within the block where they are defined. */

/* 'const' keyword is used to declare block-scoped variables & cannot be re-assigned. */

/* Template literals are denoted by backticks (``), a way to create strings that support 
interpolation of variables and multi-line strings */ 
// Example:
const yourFirstName = "Jerry";
const yourLastName = "Tom";
const yourAge = "30";

// Using template literals for string interpolation 
const greetingMessage = `Hello, my name is ${yourFirstName} ${yourLastName} and I am 
${age} years old!`;

console.log(greetingMessage);

/* Promises are used for asynchronous programming in JS. They represent the eventual completion or failure.
Allowing chaining of operations using `.then()` and `.catch()`. */

const myPromise = new Promise((resolve, reject) => {
    const condition = true; // This is just for demonstration.

    if (condition) {
        resolve('Promise is resolved successfully.');
    } else {
        reject('Promise is rejected.')
    }
}); /* a new promise is created with the `new Promise()` constructor which is given a function that 
takes two arguments, `resolve` and `reject`. */

myPromise
.then((message) =>{
    console.log(message); // this will be executed if the promise is resolved.
})
.catch((message) => {
    console.log(message); // this will be executed if the promise is rejected
});
    