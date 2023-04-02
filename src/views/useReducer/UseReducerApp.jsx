import ObjReducerApp from "./useReducer_Object/ObjReducerApp";
import TodoList from "./useReduce_Array/TodoList";
export let UseReducerApp = [
  {
    id: 0,
    render: <ObjReducerApp />,
    name: "useReduce Object",
  },
  {
    id: 1,
    render: <TodoList />,
    name: "useReduce Array",
  },
];
