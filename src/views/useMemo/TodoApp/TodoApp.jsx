import ListTodos from "./ListTodos";

export default function TodoApp() {
  return (
    <>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <label htmlFor="theme">
        <input type="checkbox" />
        Dark mode
      </label>
      <hr />
      <ListTodos tab={"all"}/>
    </>
  );
}
