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

React often involves rendering lists of elements or components based on data. The 'map' method is incredibly useful.
It allows you to transform each item in an array(like data fetched from an API) into a React component. */
// Example: displaying a list of items where each item is rendered as a component:
const items = ['Item 1', 'Item 2', 'Item 3'];

return (
    <ul>
        {items.map(item => <li key={item}>{item}</li>)}
    </ul>
); // this will render an unordered list in your UI, with each item in the 'items' array represented as a list item.

/* Filter method is useful for selectively rendering elements based on certain conditions. Before you map your array to 
components, you can filter out elements that don't meet certain criteria. */
// Example: filtering  list of tasks to only show those that are completed: 
const tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    // more tasks...
  ];
  
  return (
    <ul>
      {tasks.filter(task => task.completed).map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  );
  

// slice & splice method

// concat method 

// find & findIndex method

// destructing assignment 

// rest parameter & spread operator 

// promises, which are used to handle asynchronous operations 