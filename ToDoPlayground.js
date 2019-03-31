let todos = ['item 1', 'item 2', 'item 3'];
console.log(todos.toString());

// add item to todo variable
todos.push('item 4');
console.log(todos);

// change name of element in zero index
todos[0] = 'item 1 updated';
console.log(todos.toString());

// delete one element
todos.splice(1, 1);
console.log(todos.toString());

// display todo's
function displayTodos() {
    console.log('My todos:', todos.toString());
}
displayTodos();

// add todo
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}
addTodo('beez');

// change todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed');

// delete todo
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0);

// function practice
let myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2014
};
console.log(myComputer.operatingSystem);

let kevin = {
    name: 'Kevin',
    sayName: function() {
        console.log(this.name);
    }
};
console.log(kevin.sayName());

todoList.addTodo('boolean testing');
todoList.addTodo('array testing');
todoList.addTodo('what testing');
todoList.addTodo('bub testing');
todoList.addTodo('tub testing');

for (var i = 0; i < todoList.todos.length; i++) {
    console.log(todoList.todos[i].todoText);
}

todoList.toggleCompleted(0);
todoList.changeTodo(0, 'second try');
todoList.addTodo('just added');
console.log('Original: ');
console.log(todoList.todos.toString());

todoList.addTodo('item 4');
console.log('Add Todo: ');
console.log(todoList.todos.toString());

todoList.changeTodo(3, 'changed 4');
console.log('Change Todo: ');
console.log(todoList.todos.toString());

todoList.deleteTodo(2);
console.log('Delete Todo: ');
console.log(todoList.todos.toString());
