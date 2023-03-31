import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
          value={todo.title}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todoContent}
    </>
  );
}
