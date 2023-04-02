import { memo, useMemo } from "react";

function ListTodos({ tab, refs }) {
  console.log("on");
  const todos = useMemo(() => {
    const createTodos = [];
    for (let i = 0; i < 50; i++) {
      createTodos.push({
        id: i,
        text: "Todo " + (i + 1),
        completed: Math.random() > 0.5,
      });
    }
    return createTodos;
  }, []);
  const filterTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (tab === "all") {
        return true;
      } else if (tab === "active") {
        return !todo.completed;
      } else if (tab === "completed") {
        return todo.completed;
      }
    });
  }, [tab]);
  return (
    <ul ref={refs}>
      {filterTodos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        );
      })}
    </ul>
  );
}
export default memo(ListTodos);
