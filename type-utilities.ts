type Todo = {
    title: string
    description: string;
    completed: boolean;
}

const todo : Readonly<Todo> = {
    title: "Assitir Dark de Novov",
    description: "Relembrar os detalhes",
    completed: false
}

console.log(todo);

// todo.completed = true;

function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {
        //spread operator
        ...todo,
        ...fieldsToUpdate
    }
}

const todo2 : Todo = updateTodo(todo, { completed: true });

console.log(todo2);

/// Pick

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3 : TodoPreview = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};

console.log(todo3)


/// Omit

type TodoOmit = Omit<Todo, "description">;

const todo4 : TodoOmit = {
    title: "Fechar Ghost of Tsushima",
    completed: false
};

console.log(todo4)
