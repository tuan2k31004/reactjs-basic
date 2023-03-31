import { useState } from "react";
import UseStateApp from "../useState/UseStateApp";

export default function Hook() {
  const [display, setDisplay] = useState(true);
  const [isHook, setIsHook] = useState({});
  let hook = [
    { id: 0, name: "useCallback", render: "" },
    { id: 1, name: "useContext", render: "" },
    { id: 2, name: "useDebugValue", render: "" },
    { id: 3, name: "useDeferredValue", render: "" },
    { id: 4, name: "useEffect", render: "" },
    { id: 5, name: "useLd", render: "" },
    { id: 6, name: "useImperativeHandle", render: "" },
    { id: 7, name: "useInsertionEffect", render: "" },
    { id: 8, name: "useLayoutEffect", render: "" },
    { id: 9, name: "useMemo", render: "" },
    { id: 10, name: "useReducer", render: "" },
    { id: 11, name: "useRef", render: "" },
    { id: 12, name: "useState", render: <UseStateApp /> },
    { id: 13, name: "useSyncExternalStore", render: "" },
    { id: 14, name: "useTransition", render: "" },
  ];
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>HOOK</button>
      {display &&
        hook.map((h) => {
          return (
            <p
              key={h.id}
              onClick={() => {
                setIsHook(h);
                setDisplay(false);
              }}
              style={{ cursor: "pointer" }}
            >
              {h.name}
            </p>
          );
        })}
      {!display && (
        <>
          <h3>{isHook.name}</h3>
          {isHook.render}
        </>
      )}
    </div>
  );
}
