import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
    };
    setTodos((prev) => [...prev, obj]);
  }

  function handleDelete(id: Number) {
    const filtered = todos.filter((t) => t.id != id);
    setTodos(filtered);
  }

  return (
    <div className="container m-4">
      <h1 className="mb-4">My Todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
