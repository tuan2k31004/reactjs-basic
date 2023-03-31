import { useState } from "react";

export default function Checkbox() {
  const [ishecked, setIsChecked] = useState(false);
  return (
    <div>
      <label htmlFor="like">
        <input
          type="checkbox"
          name="like"
          id="like"
          checked={ishecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        I liked this
      </label>
      <p>you {ishecked ? "liked" : "did not like"} this</p>
    </div>
  );
}
