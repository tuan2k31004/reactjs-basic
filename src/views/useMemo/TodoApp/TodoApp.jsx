import ListTodos from "./ListTodos";
import { useState, useRef, useEffect } from "react";
export default function TodoApp() {
  const [tab, setTab] = useState("all");
  const refList = useRef(null);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      refList.current.style.background = "black";
      refList.current.style.color = "white";
    } else {
      refList.current.style.background = "white";
      refList.current.style.color = "black";
    }
  }, [dark]);
  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <label htmlFor="theme">
        <input
          type="checkbox"
          onChange={(e) => {
            setDark(e.target.checked);
          }}
        />
        Dark mode
      </label>
      <hr />
      <ListTodos tab={tab} refs={refList} />
    </>
  );
}
