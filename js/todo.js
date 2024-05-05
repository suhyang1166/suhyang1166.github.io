const todoForm = document.querySelector(".todo form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo ul");

const TODOS_KEY = "todos";

let todos = [];

const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const removeList = (e) => {
    const li = e.target.parentElement;
    const removedId = parseInt(li.id);
    li.remove();
    todos = todos.filter((todo) => todo.id !== removedId);
    saveTodos();
};

const paintTodo = (newTodo) => {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const btn = document.createElement("button");
    btn.innerText = "X";

    btn.addEventListener("click", removeList);

    li.append(span, btn);
    todoList.appendChild(li);
};

const handelTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

todoForm.addEventListener("submit", handelTodoSubmit);

// localStorage todos 가져오기
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
