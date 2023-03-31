import { useState } from "react";

export default function TwoUseState() {
  const [name, setName] = useState("Tuấn");
  const [age, setAge] = useState(20);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello {name}. You are {age}.
      </p>
    </div>
  );
}
