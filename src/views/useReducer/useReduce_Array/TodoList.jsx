import { useReducer, useState } from "react";
let nextId = 3;
const initialState = [
  { edit: false, done: true, id: 0, name: "Visit Kafka Museum" },
  { edit: false, done: false, id: 1, name: "Watch a puppet show" },
  { edit: false, done: false, id: 2, name: "Lennon Wall pic" },
];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: nextId++,
          done: false,
          edit: false,
          name: action.name,
        },
      ];
    case "changeDone":
      return state.map((t) => {
        return t.id === action.id ? { ...t, done: action.done } : t;
      });
    case "changeEdit":
      return state.map((t) => {
        return t.id === action.id ? { ...t, name: action.name } : t;
      });
    case "edit":
      return state.map((t) => {
        return t.id === action.id ? { ...t, edit: !t.edit } : t;
      });
    case "delete":
      return state.filter((t) => t.id !== action.id);
  }
}
export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  return (
    <>
      <h2>Prague itinerary</h2>
      <input
        type="text"
        placeholder="Add task"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", name: text });
          setText("");
        }}
      >
        Add
      </button>
      <hr />
      {state.map((todo) => {
        return (
          <div key={todo.id}>
            <label htmlFor={todo.name}>
              <input
                type="checkbox"
                name={todo.name}
                id={todo.name}
                checked={todo.done}
                onChange={(e) => {
                  dispatch({
                    type: "changeDone",
                    done: e.target.checked,
                    id: todo.id,
                  });
                }}
              />
              {!todo.edit && todo.name}
            </label>
            {todo.edit && (
              <input
                type="text"
                value={todo.name}
                onChange={(e) => {
                  dispatch({
                    type: "changeEdit",
                    name: e.target.value,
                    id: todo.id,
                  });
                }}
              />
            )}
            <button
              onClick={() => {
                dispatch({ type: "edit", id: todo.id });
              }}
            >
              {todo.edit ? "Save" : "Edit"}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "delete", id: todo.id });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
