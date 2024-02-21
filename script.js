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

// Chaining Promises: this can be done to perform a series of asynchronous operations in order.
const firstMethod = () => {
    return new Promise((resolve, reject) => {
        resolve('First method completed');
    });
};

const secondMethod = (message) => {
    return new Promise((resolve, reject) => {
        resolve(`${message} - Second method completed`);
    });
};

firstMethod()
    .then(secondMethod)
    .then((message) => console.log(message)) // Logs: First method completed - Second method completed
    .catch((error) => console.error(error));

/* async and await are used to work with Promises in a more synchronous-looking manner. 
async is used to declare a function as asynchronous, and await is used to wait for a Promise to be 
resolved */
async function asyncFunction() {
    try {
        const response = await myBigPromise;
        console.log(response); // This will log if the promise is resolved.
    } catch (error) {
        console.error(error); // This will log if the promise is rejected.
    }
}

asyncFunction();

// `Promise.all` is used when you want to wait for multiple promises to be completed.
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = Promise.resolve('Promise 2 resolved');

Promise.all([promise1, promise2]).then((message) => {
    console.log(message); // Logs: ['Promise 1 resolved', 'Promise 2 resolved']
});

/* async / await syntax is a modern approach to handle asynchronous operations. 
Making code easier to read and maintain. */
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));
}

async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data); // Outputs: "Data fetched" after 2 seconds
}

getData();

// handling errors with Async/Await:
async function getDataWithErrorHandling() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(object);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getDataWithErrorHandling();

// Async/Await with multiple independent promises (`promise.all`)
async function fetchMultipleData() {
    try {
        const [result1, result2] = await Promise.all([fetchData(), fetchData()]);
        console.log(result1, result2);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchMultipleData();

/* Arrow functions are a concise syntax for defining functions. Shorter and `this` retains the value
of the enclosing lexical context */
// Basic Example 
const added = (m, n) => m + n;
console.log(add(4, 6)); // 10

// Example with `this`
function Timers() {
    this.second = 0;
    setInterval(() => {
        this.second++;
        console.log(this.second);
    }, 1000);
}

const timers = new Timers();

/* Event delegation - where you attach an event listener to a partner element 
instead of a individual child element. */
/* <!DOCTYPE html>
<html>
<head>
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="myList">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <!-- More list items can be added dynamically -->
    </ul>

    <script>
        // JavaScript
        document.getElementById('myList').addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                alert('You clicked on item: ' + event.target.textContent);
            }
        });
    </script>
</body>
</html>
*/

// map() function & it's purpose 
/* Used for iterating over arrays and creating a new array by applying a specified function to each element
of the original array. This method is useful for transforming data. */

/* 
1. applies a given function to each element of the array, effectively transforming the elements.
2. it creates and returns a new array containing the results of applying the function to each element.
3. the function passed to `map()` receives three arguments: the current element, the index of the current element,
and the array `map()` was called upon.
4. since `map()` returns a new array, it can be chained with other array methods like `filter()`, and etc. */
const numbers = [1,2,3,4,5];
const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1,4,9,16,25]

// filter() function & it's purpose 
/* the filter() function is used to create a new array containing elements that pass a certain condition
defined by a provided function. It allows filtering elements from an array based on specific criteria. */
const numbers1 = [1,2,3,4,5,6,7,8,9,10];

// we want just the even numbers, so we will use filter()
const evenNumbers = numbers1.filter(number => number % 2 === 0 );

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// reduce() function & it's purpose 
/* used to reduce an array to a single value by applying a function to each element and 
accumulating the result. Often used to perform calculations or transformations on arrays */
const numbers2 = [1,2,3,4,,5];

// we want to get the sum of the element in the array
const sum1 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum1); // Output: 15
