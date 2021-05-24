
// Selector
const taskName = document.getElementById('addTask-input');
const taskButton = document.getElementById('addTask-btn');
const taskList = document.getElementById('task-items');
const filterOption = document.getElementById('filter-todo');


//Event Listener
taskButton.addEventListener("click", addTheItem)
taskList.addEventListener("click", deleteAndCheck);
filterOption.addEventListener("click", filterTodo)

function addTheItem(){
    //todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //todo List
    const newTodo = document.createElement('li');
    newTodo.innerText = taskName.value;
    newTodo.setAttribute("contenteditable","true")
    newTodo.classList.add("todo-list");
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement('button');
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
    todoDiv.appendChild(completedButton);

    //delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    todoDiv.appendChild(deleteButton);

    //append the div to List
    taskList.appendChild(todoDiv);

    //Reset Add Task Value
    taskName.value = "";

}

function deleteAndCheck(e){
    const item = e.target;

    //delete task
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        //Animation to fall
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    //Check Task
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
    const todos = taskList.childNodes;
    todos.forEach(function(todo){

        switch(e.target.value){
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
        }
    });
}
