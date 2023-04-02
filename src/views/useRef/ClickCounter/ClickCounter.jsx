import { useRef } from "react";

export default function ClickCounter() {
  let ref = useRef(0);
  return (
    <>
      <button
        onClick={() => {
          ref.current = ref.current + 1;
          alert(ref.current);
        }}
      >
        Click me!
      </button>
    </>
  );
}
