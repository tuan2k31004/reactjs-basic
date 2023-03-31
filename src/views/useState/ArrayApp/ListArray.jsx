import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
export default function ListArray() {
  const [todos, setTodos] = useState([
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ]);
  return (
    <div>
      <AddTodo
        onAdd={(text) => {
          setTodos([
            ...todos,
            {
              id: todos.length,
              title: text,
              done: false,
            },
          ]);
        }}
      />
      <TaskList
        todos={todos}
        onChangeTodo={(todo) => {
          setTodos(
            todos.map((t) => {
              return t.id === todo.id ? todo : t;
            })
          );
        }}
        onDeleteTodo={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
      />
    </div>
  );
}
