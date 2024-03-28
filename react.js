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


// concat method, used to merge two or more arrays, this method doesn't change the existing arrays but instead returns a new array
// Concat Method Example:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combineArray = array1.concat(array2); // concat merges array1 and array2 into combineArray

console.log(combineArray); // [1, 2, 3, 4, 5, 6]

// Merging Arrays with Other Values 
const array3 = [1, 2];
const extraElement = 3;
const array4 = [4, 5];

const combinedArray = array3.concat(extraElement, array4);

console.log(combinedArray); // [1, 2, 3, 4, 5]

/* Importance of concat in React 
1. Immutability is a key concept in React, especially for performance optimization.
Immutable data patterns help in preventing unexpected side effects and bugs. Since 'concat'
doesn't modify the original arrays but returns a new array, it aligns well with React's design philosophy.

2. React's re-rendering process and optimizations like 'PureComponent' & 'shouldComponentUpdate'
rely on the ability to quickly and accurately compare previous and current state/props to determine
if re-rendering is necessary. Using immutable operations lke 'concat' makes these comparisons 
straightforward and efficient.

3. Clarity and Readability: 'concat' provides a clear and declarative way to handle array manipulations, 
making code more readable and maintainable. This is particularly valuable in a React application
where the flow of data and state can become complex.

4. React embraces functional programming concepts. Methods like 'concat', which don't cause side effects and 
don't modify the original data, fit well into this paradigm, encouraging practices that lead to more predictable 
and manageable code.
*/
// Example with concat in React, adding an item to a list in state 
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: ['Item 1', 'Item2'] };
    }

    addTodo(newTodo) {
        this.setState(prevState => ({
            todos: prevState.todos.concat(newTodo)
        }));
    }

    render() {
        // render logic 
    }
} // in this example, when adding a new todo item, 'concat' is used to create a new array with the new item added, thus avoiding direct mutation of the state 

// Example with concat in React, merging external data with state 
componentDidMount() {
    fetchDataFromAPI().then(apiData => {
        this.setState(prevState => ({
            combinedData: prevState.localData.concat(apiData)
        }));
    });
}
//  data fetched from an API is combined w/ local data stored in the state, creating a new array that merges both data sources


// find & findIndex method
// find method returns the value of the first element in the provided array that satisfies the provided testing function
// find Method Example: Finding an Object in an Array 
const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ];
  
  const findBook = title => books.find(book => book.title === title);
  
  console.log(findBook('1984')); // { id: 1, title: '1984', author: 'George Orwell' }

// Example 2:
const testNumbers = [3, 7, 11, 9, 12];

const firstGreaterThanTen = testNumbers.find(testNumbers => testNumbers > 10);

console.log(firstGreaterThanTen); // 11

// findIndex method returns the index of the first element in the array that satisfies the provided testing function.
// findIndex example: finding the index of an object array
const employees = [
    { id: 101, name: 'Jane' },
    { id: 102, name: 'John' },
    { id: 103, name: 'Chris' }
  ];
  
  const findEmployeeIndexById = id => employees.findIndex(employee => employee.id === id);
  
  console.log(findEmployeeIndexById(102)); // 1
  


// destructing assignment 

// rest parameter & spread operator 

// promises, which are used to handle asynchronous operations 