import { useState } from "react";

export default function TextField() {
  const [text, setText] = useState("hello");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <p>You typed : {text}</p>
      <button onClick={()=>setText("hello")}>Reset</button>
    </div>
  );
}
