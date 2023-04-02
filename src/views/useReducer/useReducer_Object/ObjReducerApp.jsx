import { useReducer } from "react";

const initialState = { name: "Taylor", age: 42 };
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return {
        ...state,
        age: state.age + 1,
      };
    case "changed_name":
      return {
        ...state,
        name: action.nextName.target.value,
      };
  }
}

export default function ObjReducerApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          dispatch({ type: "changed_name", nextName: e });
        }}
        value={state.name}
      />
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>
        Hello,{state.name}. You are {state.age}.
      </p>
    </>
  );
}
