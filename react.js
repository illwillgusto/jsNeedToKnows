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
// Slice Method Example:
const fruits = ['apples', 'bananas', 'orange', 'mangos', 'kiwi'];

const citrusFruits = fruits.slice(2, 4); // this tells us we want to take the index between 2 & 4 but not including index 4

console.log(citrusFruits); // ['orange', 'mango']

// Splice Method Example: 
const pets = ['dog', 'cat', 'rabbit', 'fish'];

pets.splice(2, 1, 'hamster', 'parrot'); // Removes 'rabbit' and adds 'hamster', 'parrot'

console.log(pets); // ['dog', 'cat', 'hamster', 'parrot']

/* -slice is important in React for creating new arrays from existing ones without mutating them. 
This aligns with React's principles of immutable state management.
-splice, though it mutates the array, can still be useful when used on a copy of the state. 
It allows complex array manipulations before updating the state.
-Careful handling of state and array operations is crucial in React to ensure the UI updates correctly and efficiently. 
Both slice and splice can be valuable tools in a React developer's toolkit when used appropriately. */

// Example: Updating State with a Subset of an array with the slice method 
/* Imagine a scenario where you have a list of items stored in the state, and you want to render only a 
subset of these items based on some criteria, such as pagination or filtering. */ 
class ItemList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'] };
    }
  
    renderSubset() {
      // Suppose we want to show only the first three items
      const subset = this.state.items.slice(0, 3);
  
      return subset.map(item => <li key={item}>{item}</li>);
    }
  
    render() {
      return (
        <ul>
          {this.renderSubset()}
        </ul>
      );
    }
}
// in the above example 'slice' is used to create a new array from the existing state without mutating it

// Example: Removing an Item from State, you have a list of tasks and you want to remove a task from the list
class TaskList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tasks: ['Task 1', 'Task 2', 'Task 3'] };
    }
  
    removeTask(index) {
      // Make a copy of the tasks array
      const updatedTasks = [...this.state.tasks];
  
      // Use splice to remove the item
      updatedTasks.splice(index, 1);
  
      // Update the state with the new array
      this.setState({ tasks: updatedTasks });
    }
  
    render() {
      return (
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={task}>
              {task}
              <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      );
    }
  }
/* a copy of the state array is made using spread syntax before using splice. This ensures that the original state is not 
mutated directly */  


// concat method 

// find & findIndex method

// destructing assignment 

// rest parameter & spread operator 

// promises, which are used to handle asynchronous operations 