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
${yourAge} years old!`;

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
/* async function getDataWithErrorHandling() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(object);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getDataWithErrorHandling(); */

// Async/Await with multiple independent promises (`promise.all`)
/* async function fetchMultipleData() {
    try {
        const [result1, result2] = await Promise.all([fetchData(), fetchData()]);
        console.log(result1, result2);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchMultipleData(); */

/* Arrow functions are a concise syntax for defining functions. Shorter and `this` retains the value
of the enclosing lexical context */
// Basic Example 
const added = (m, n) => m + n;
console.log(add(4, 6)); // 10

// Example with `this`
/*function Timers() {
    this.second = 0;
    setInterval(() => {
        this.second++;
        console.log(this.second);
    }, 1000);
} */

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

/* Callback functions are passed as an argument to another function and get executed at a later time 
or in response to an event. Callbacks enable asynchronous and event-driven programming. */
function goodGreeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(goodGreeting); // this will prompt the user to enter their name upon the page load 
 /* greeting is a simple function that takes a name and logs a greeting to the console.
processUserInput is a function that takes a callback function as its parameter. It gets user input, and 
then calls the passed-in callback function with the name provided by the user.
When processUserInput(greeting) is called, greeting function is passed as a callback. 
This means once the user enters their name, greeting will be called with the entered name.
This pattern is very common in JavaScript, especially in scenarios involving asynchronous operations 
like handling events, server requests, or timers. */

/* JS modules are reusable pieces of code that encapsulate related functionality. They allow for better
organization and code reuse in larger applications. 
they are just a file containing JS code that can be exported and the imported into other JS files*/
// often used with build tools or transpilers for compatibility with different browsers and environments.


/* Object destructing is a syntax that allows you to unpack values from objects into distinct variables */
const newEmployee = {
    userName: "Jimmy B",
    userAge: 32,
    userAddress: {
        street: "123 Lane Blvd",
        city: "Miami"
    }
};
// object destructing will allow you to pull specific properties from the above object into variables 
const {userName, userAge} = newEmployee;

console.log(userName); // Outputs: Jimmy B
console.log(userAge); // Output: 32
// object destructing can go further with nested properties as well

const {userAddress: {street, city} } = newEmployee;
console.log(street); // 123 Lane Blvd
console.log(city); // Miami 

// JS classes are a way to define objects with the shared properties and behaviors.
// Defining a class example 
class studentPerson {
    constructor(stName, stAge) {
        this.stName = name;
        this.stAge = age;
    }

    stGreet() {
        console.log(`Hello, my name is ${this.stName} and I am ${this.stAge} years old`);
    }
}
// studentPerson was the class with a constructor for initializing the object & method 'stGreet'.

/* Inheritance is a mechanism where an object can inherit properties and methods from another object.
good to note that classes also support inheritance. this allows for code reuse and creating hierarchical 
relationships between objects. */
class Student extends studentPerson {
    constructor(stName, stAge, aCourse) {
        super(stName, stAge); // Call the parent class constructor 
        this.aCourse = aCourse;
    }

    study() {
        console.log(`${this.stName} is studying ${this.aCourse}.`);
    }
}
// in this example 'Student' class, 'super(stName, stAge)' is used to call the constructor of the 'studentPerson' class.

const student1 = new Student("Mike", 22, "Computer Science");
student1.stGreet(); //Output: Hello my name is Mike and I am 22 years old
student1.study(); //Output: Mike is studying Computer Science. 
// 'student1' is an instance of the 'Student' class which access those methods from 'Student' and the inherited 'studentPerson' class


/* getter and setters, used to get and set the values of object properties. they provide control over property access 
and enable data validation and encapsulation */

class Individual {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for fullName
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter for fullName
    set fullName(name) {
        const parts = name.split(' ');
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}

const individual = new Individual("Daffy", "Duck");

console.log(individual.fullName); //Output: Duffy Duck

individual.fullName = "Mickey Mouse";
console.log(individual.fullName); //Output: Mickey Mouse


/* try/catch statement are used for error handling. it allows catching and handling exceptions that occur
during the execution of a block of code */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("Caught an error:", error.message);
}
/* the 'divide' function performs division but throws an error if the divisor 'b' is zero.
the 'try' block attempts to execute the 'divide' function
if an error occurs in the 'try' block, the error is thrown. in this case b === 0 so an error will be thrown 
the 'catch' block catches the error and executes its code block
*/


/* understanding forEach() functions are used to execute a provided function once for 
each element in an array. It provides an easy way to iterate over array elements and perform 
operations on them */
const fruits = ['apple', 'banana', 'kiwi'];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

/* the `forEach()` method takes a callback function as an argument.
this callback function is executed for each element in the 'fruits' array
the callback function receives two arguments: the current element 'fruits' and its index 'index' in the array.

Output of this code will be:
0 'apple'
1 'banana'
2 'kiwi'
*/


/* localStorage object allows web apps to store-key value pairs locally on the user's browser. Providing a simple way
to store and retrieve data persistently. */
//  Storing Data *note the limited is 5MB of data
localStorage.setItem('username', 'Peter Pan');

// Retrieving Data
const username = localStorage.getItem('username');
console.log(username); //Output: Peter Pan

// Removing Data
localStorage.removeItem('username');

// Clearing All Data 
localStorage.clear();

// setTimeout is used to schedule the execution time of a function in milliseconds.

/* event bubbling is a mechanism that when one event is triggered on specific element will also trigger 
the same event on all parent elements */

// the fetch() function is used to make HTTP request and fetch resources from the network like APIs 
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // or response.text() if the response is not in JSON format
  })
  .then(data => {
    console.log(data); // Process and use the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  /*
  In this example:

-The fetch function is called with a URL to the API.
-The first .then() checks if the response is OK (status in the range 200-299). If not, it throws an error.
-Then, it converts the response to JSON using response.json(). 
If the data is not JSON, you might use response.text() or another method depending on the response type.
-The second .then() receives the parsed data and you can process or use it as needed.
-The .catch() is used to catch any errors that occur during the fetch or processing steps.
*/

// Object.keys() function is used to take all the keys of an object and return them as an array.

const animal = {
    name: 'Tiger',
    weight: 225,
    habitat: 'Jungle'
};

const keys = Object.keys(animal);
console.log(animal); // Output: ['name', 'weight', 'habitat']

/* what's the purpose of the parentNode property? used to get the parent node of 
a specified element in the DOM. It's a read-only property that returns the parent of 
the specified node in the DOM tree.

html structure:
<div id="parent">
    <p id="child">Hello, world!</p>
</div>

you want to change the background color of the parent <div> when a script is ran.
here's how you can use 'parentNode' in JS */

// Get the child element 
const childElement = document.getElementById('child');

//use parentNode to access and modify the parent element 
childElement.parentNode.style.backgroundColor = 'lightblue';

/* in this example, when the JS code runs, it will change the bg color of the <div> */

// bind() method is used to create a new function with a specified 'this' value and initial arguments
const user = {
    name: "Alice",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greet = user.greet;
greet(); // Output will be incorrect because 'this' is not bound to 'user'

// to fix this, you can use 'bind()'
const greetBound = user.greet.bind(user);
greetBound(); // Correct output: "Hello, my name is Alice"

/* understanding the call() method which is used to invoke a function with a specified this value and arguments 
provided individaully. It allows borrowing methods from other objects and explicit invocation of functions. */
// Example: suppose we have two objects, 'person' and 'employee', and a function that logs a greeting message:

function greet(greeting, message) {
    console.log(greeting + ', ' + this.name + ', ' + message);
}

const person = {
    name: 'John'
};

const employee = {
    name: 'Jane'
};

// Using call() to invoke greet with 'this' set to person
greet.call(person, 'Hello', 'How are you today?'); // Hello, John, how are you today?

// Using call() to invoke greet with 'this' set to employee 
greet.call(employee, 'Hi', 'Welcome to the company!'); // Hi, Jane, welcome to the company!

// the apply() method is similar to the call() method but with arrays or array-like object. Instead of arguments individually, apply() takes arguments as an array.
// consider a scenario where we have a function that adds multiple numbers, and we want to pass an array of number to this function:
function sum() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5];

// Using apply() to pass an array of numbers
const result = sum.apply(null, numbers);

console.log(result); //Outputs: 15

/* We have a 'sum' function that calculates the total of all arguments passed to it.
We use 'apply()' to call the 'sum' function, passing 'null' as the 'this' argument (since 'this'
is not used in the function), and 'numbers as the array of arguments.
The 'sum' function then adds up all he numbers in the array. */


/* understanding the padStart() method, which pads the current string with another string
(multiple times, if needed) until the resulting string reaches the given length 
Here's an example: */
const numbers = [1, 12, 123];

const paddedNumbers = numbers.map(num => String(num).padStart(3, '0'));
// ensures each string has a lenght of 3, and if the string is shorter than 3 then it will add '0's at the start 

console.log(paddedNumbers); // Output: ["001", "012", "123"]

// note padEnd() method works the same way just starts at the end of a string 

// charAt() method is used to retrieve the character at a specified index in a string.

// charCodeAt() method is used to retrieve the Unicode value of the character at a specified index in a string.

// String.fromCharCode() method is used to create a string from a sequence of Unicode values.
// Example: Suppose you have Unicode values for the characters 'H','e','l','l','o'
// Unicode values for 'H', 'e', 'l', 'l', 'o'
const charCodes = [72, 101, 108, 108, 111];

const str = String.fromCharCode(...charCodes);

console.log(str); // Output: "Hello"

/* We have an array 'charCodes' containing the Unicode values for each character in the string
"Hello"
'String.fromCharCode()' is called with the spread operator(...) to pass all elements of the array
as individual arguments. 
The method converts these Unicode values back to their respective characters, forming the 
string "Hello" */


/* JSON.stringify() method converts a JavaScript object or value to a JSON string.
this method can be very useful when you need to serialize JavaScript data structures into 
a format that can be easily stored or transmitted to a web server */
// Example: Converting an Object to a JSON String 
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    hobbies: ["reading", "cycling"]
};

const jsonString = JSON.stringify(person);

console.log(jsonString);

/* Output: json file 
{"name":"John Doe", "age":30,"address":{"street":"123 Main St", "city":"Anytown"},"hobbies":["reading", "cycling"]}

To deserialize you would use the JSON.parse() method which will convert the JSON string to a JavaScript Object
*/

/* the encodeURIComponent() function in JavaScript is uded to encode a URI component by
escaping characters that are not valid in a URL part. This function is very useful when 
you need to encode query strings or form parameters to ensure they are properly formatted in a URL. */
// Example: Encoding a Query String, you have a query string w/ special characters or spaces that need to append to a URL:
const queryParams = {
    name: "Jane Doe",
    message: "Hello! How are you?"
};

const encodeURL = Object.keys(queryParams).map(key =>
    encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
).join('&');

const url = 'https://example.com/search?' + encodeURL;

console.log(url);

// https://example.com/search?name=Jane%20Doe&message=Hello%21%20How%20are%20you%3F

// the decodeURIComponent() function would decode the URL back to the state we saw before 

/* Currying in JavaScript is a technique of translating a function that takes multiple arguments into 
a sequence of functions that each take a single argument. a concept that allows you to create a chain of 
functions that gradually receive the arguments needed to run the main function. 
How Currying Works:
1. Transform Function 
2. Delayed Execution 
*/

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyByTwo = multiply(2);
const result = multiplyByTwo(3);

console.log(result); // Outputs: 6

/* 
In this example:
-multiply is a curried function. It takes one argument a and returns another function.
-The returned function takes the next argument b and finally computes the product a * b.
-multiplyByTwo is a partially applied function that keeps 2 as a multiplier.
-result holds the outcome of multiplyByTwo(3), effectively computing 2 * 3.
*/

// Understanding and know the 7 types of errors are important when working with JavaScript, I've listed them below 

/* 1. Syntax Errors: These occur when the code written does not follow the rues and syntax of the language. It's 
like a grammatical error in a programming context. These errors prevent the code from being successfully compiled or interpreted.
Example: missing a bracket or a comma. */
if (a = 3 { console.log(a); } // SyntaxError: missing ) after condition 

/* 2. Reference Errors: These occur when code refers to variable that is not in space or doesn't exist. 
Example: Trying to use a variable that hasn't been declared. */
console.log(x); // ReferenceError: x is not defined 

/* 3. Type Errors: These happen when an operation is performed on a value of an inappropriate type, like 
trying to call something that's not a function or accessing properties on something that's not an object.
Exmaple: Trying to call a non-function or accessing a property on 'undefined' */
const num = null;
num.split(','); // TypeError: num.split is not a function

/* 4. Range Errors: These occur when a value is not within an expected range or set of values.
Example: Creating an array with an invalid length. */
new Array(-1); // RangeError: Invalid array length 

/* 5. URI (Uniform Resource Identifier) Errors: These are thrown when global URI handling functions are used incorrectly
Example: Passing an invalid URI to 'encodeURI' or 'decodeURI' */
decodeURI('%'); // URIError: URI malformed 

/* 6. Evaluation Errors (EvalError): These are now rare and mostly irrelevant, as 'EvalError' is no
longer thrown in modern JavaScript environments. Historically, they were related to the improper
use of the 'eval()' function. */

/* 7. Custom Errors: In addition to built-in error types, Javascript allows the creation of custom error
types by extending the 'Error' class. This can be useful for creating application-specific error handling. */


/* Knowing Higher-order functions, which is a function that either takes one or more functions as arguments, or 
returns a function as its results. */

/* Good to know BOM (Browser Object Model), the context of web development, refers to the objects provided 
by web browser that allow interaction with the browser window and the environment in which the web pages are displayed */

//  Implicit Type Coercion examples below 
// Coercion to a string.
 console.log('5' + 3); // '53', number 3 is converted to a string 
 console.log('5' + true); // '5true', boolean true is converted to a string 

//  Coercion to a number.
 console.log('5' - 3); // 2, string '5' is converted to a number 
 console.log('4' * '2'); // 8, both strings are converted to numbers, this is due to the multiply operator 
 console.log('5' * false); // 0, string '5' is converted to a number and false is seen as 0, again this has to do with the multiply operator 

