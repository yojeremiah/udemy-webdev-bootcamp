var todos = [];
var input = prompt('What would you like to do?');

while (input !== "quit"){
    if (input === "list"){
        listTodos();
    }
    else if (input === "new"){
        addTodo();
    }
    else if (input === "delete"){
        deleteTodo();
    }
    input = prompt('What would you like to do?');
}
console.log('QUITTING APP');

function listTodos(){
    console.log("******");
    todos.forEach(function(todo, index){
        console.log(index + ": " + todo);
    });
    console.log("******");
}

function addTodo(){
    var newItem = prompt('Enter new todo: ');
    todos.push(newItem);
    console.log("Added item to end of list");
}

function deleteTodo(){
    var deleteIndex = prompt("Please enter the index of the todo to delete:");
    todos.splice(deleteIndex, 1);
    console.log("Deleted item at index " + deleteIndex);
}