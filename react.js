//  The examples below and terms are below this line because these are need to know and have a full understanding before diving into React

// map & filter method 
// Map Method Example:
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const names = people.map(person => person.name); /* If you have an array of objects and you want
to extract a specific property from eah object */

console.log(names); // ['Alice', 'Bob', 'Charlie']

// Filter Method Example:
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];

const expensiveProducts = products.filter(product => product.price > 600); /* If you have an array of objects 
and you want to filter them based on condition. */

console.log(expensiveProducts); // [{ name: 'Laptop', price: 1000 }, { name: 'Tablet', price: 700 }]
/* Map and Filter are essential in React development for promoting immutable data patterns, enabling 
dynamic and conditional rendering of components, optimizing performance, and contributing to a 
declarative and maintainable codebase. 

React often involves rendering lists of elements or components based on data 

// slice & splice method

// concat method 

// find & findIndex method

// destructing assignment 

// rest parameter & spread operator 

// promises, which are used to handle asynchronous operations 