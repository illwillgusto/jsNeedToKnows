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

/* Importance in React 
Declarative: 'find' aligns well with React's declarative approach, allowing you to succinctly 
express what you're looking for.

Immutability: 'find' doesn't mutate the original array, which is important for React's state
management and avoiding side effects.

Accurate State Updates: 'findIndex' helps in accurately locating the position of an item in an array, 
which is crucial for updating the state in React, especially when dealing with lists.

Maintaining Immutability: It's used in combination w/ other methods (like spread syntax) to update the state without
mutating the original array, adhering to React's best practices.

find: useful for retrieving specific items from an array based on a condition, aligning w/ React's 
declarative and immutable principles.
findIndex: important for performing operations (like updates or deletions) on items within arrays in the state,
while maintaining the immutability of the state.
 */

// using 'find' example: selecting an item from State
class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { id: 1, name: 'Mary', age: 30 },
          { id: 2, name: 'Bob', age: 25 },
          { id: 3, name: 'Carol', age: 35 }
        ]
      };
    }
  
    getUserById(userId) {
      return this.state.users.find(user => user.id === userId);
    }
  
    render() {
      const user = this.getUserById(2); // Find user with ID 2
      return <div>{user ? user.name : 'User not found'}</div>;
    }
  } // in this example, 'find' is used to locate a specific user in the state array 

//   using 'findIndex' example: updating state based on a condition 
//  you have a list of tasks and you want to update the status of a specific task.
class TaskList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [
          { id: 1, title: 'Buy groceries', completed: false },
          { id: 2, title: 'Read a book', completed: false },
          { id: 3, title: 'Go for a walk', completed: false }
        ]
      };
    }
  
    completeTask(taskId) {
      const index = this.state.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        const updatedTasks = [...this.state.tasks];
        updatedTasks[index].completed = true;
        this.setState({ tasks: updatedTasks });
      }
    }
  
    render() {
      // render logic
    }
  }
// to find the index of a task that needs to be updated, ensuring immutability by creating a copy of the array before updating the state.

  


// destructing assignment is a convenient way to extract values from arrays or properties from objects into distinct variables.
// Example 1: extracting data from an object
const user = {
    id: 123,
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30
  };
  
  const { name, email } = user; // the 'name' and 'email' properties are extracted from the 'user' object.
  
  console.log(name); // John Doe
  console.log(email); // johndoe@example.com
  
//   Example 2: destructing in function parameters, makes functions more readable and allows for direct use of object properties as variables.
function displayUserInfo({ name, email, age }) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }
  
  const user = {
    name: 'Alice Smith',
    email: 'alice@example.com',
    age: 28
  }; // destructing in the function parameter makes it clear which properties of the 'user' object the function expects.
  
  displayUserInfo(user); // Name: Alice Smith, Email: alice@example.com, Age: 28

/* Importance of Destructing in React
1. Cleaner Code: Destructing makes your component's code more concise and readable, especially when dealing with 
props or state. It allows you to directly use property names instead of repeating 'this.props' or 'this.state'.

2. Easier Prop Usage: In functional components or class component methods, destructing props 
directly in the parameter list makes the code cleaner and more understandable.

3. Less Code Repetition: By avoiding constant repetition of 'this.props' or 'this.state', you 
reduce the verbosity of your code, making it easier to read an maintain. 

4. Selective Extraction: You can extract only the properties you need from props or state, which can make
your intent more clear. 
*/

// Example in React: Using Destructing with Props (Functional Component Example), you can destructure props directly in the para list
function UserProfile({ name, email }) {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  
  // Usage
  <UserProfile name="John Doe" email="john@example.com" />
// the 'UserProfile' component takes 'name' & 'email' as props, & destructing allows for direct access to these props in a concise manner 

// Class Component Example
// render methods or other methods where you frequently access 'this.props' or 'this.state'
class UserProfile extends React.Component {
    render() {
      const { name, email } = this.props;
      return (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      );
    }
  }
  
  // Usage
  <UserProfile name="Alice Smith" email="alice@example.com" />
// 'name' and 'email' are destructured from 'this.props', simplifying the access to these properties within the render method   


// rest parameter & spread operator 
/* Rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to handle functions paras more flexibly */
// Example 1: Sum Function, a function that takes any number of arguments and returns their sum. 
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  
  console.log(sum(1, 2)); // 3
  console.log(sum(1, 2, 3, 4, 5)); // 15
// in this example, '...numbers' is a rest parameter that collects all passed arguments into an array named 'numbers'

// Example 2: Collecting Remaining Arguments, gathering the remaining arguments passed to a function into an array
function greet(firstName, lastName, ...titles) {
    console.log(`Hello, ${titles.join(' ')} ${firstName} ${lastName}`);
  }
  
  greet('John', 'Doe', 'Dr.', 'Professor'); // "Hello, Dr. Professor John Doe"
// here, '...titles' collects all arguments beyond the first two into an array 'titles'  
/* Spread Operator allows an iterable such as an array or string to be expanded in places where zero or more arguments
(for function calls) or elements(for array literals) are expected. It can also be used to spread object properties.
 */
// Example 1: Combining Arrays or concatenating multiple arrays.
const goodFruits = ['apple', 'banana', 'cherry'];
const berries = ['strawberry', 'blueberry'];

const combined = [...goodFruits, ...berries];

console.log(combined); // ['apple', 'banana', 'cherry', 'strawberry', 'blueberry']
// the spread operator '...' is used to combine goodFruits and berries into a new array combined

// Example 2: Closing Objects, creating a copy of an object w/ additional properties 
const original = { a: 1, b: 2 };
const copyWithMore = { ...original, c: 3 };

console.log(copyWithMore); // { a: 1, b: 2, c: 3 }
// this example shows how the spread operator can be used to clone 'original' and add a new property 'c'

// Example 3: Function Arguments, spreading an array into individual arguments in a function call. 
const numbers = [1, 2, 3];

function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(...numbers)); // 6
// in this '...numbers' spreads the array into individual arguments for the 'multiply' function


// promises, which are used to handle asynchronous operations 