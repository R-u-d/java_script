const todoList = document.getElementById("todo-list");


fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todos => {
        todos.forEach(todo => {
            // creating li element
            const li = document.createElement("li");

            // setting text content
            li.textContent = todo.title;

            // css-tailwind styling
            if (todo.completed) {
                li.className = "text-green-600 line-through";
            } else {
                li.className = "text-red-600";
            }

            // adding li to ul
            todoList.appendChild(li);
        });

    });