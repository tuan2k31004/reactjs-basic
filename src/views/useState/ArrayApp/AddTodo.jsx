import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="AddTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
}
