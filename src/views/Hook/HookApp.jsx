import { useState } from "react";
import { UseEffectApp } from "../useEffect/UseEffectApp";
import { UseStateApp } from "../useState/UseStateApp";
import { UseRefApp } from "../useRef/UseRefApp";
import { UseMemoApp } from "../useMemo/UseMemoApp";
import { UseReducerApp } from "../useReducer/UseReducerApp";
import { UseContexApp } from "../useContext/UseConteApp";

export default function HookApp({ hook }) {
  let app = hook;
  const [isShow, setIsShow] = useState(app[0].render);
  return (
    <div>
      <fieldset style={{ minHeight: "300px", maxWidth: "700px" }}>
        <legend>
          {app.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setIsShow(a.render);
              }}
            >
              {a.name}
            </button>
          ))}
        </legend>
        {isShow}
      </fieldset>
    </div>
  );
}
export let hook = [
  { id: 0, name: "useCallback", render: "" },
  { id: 1, name: "useContext", render: UseContexApp },
  { id: 2, name: "useDebugValue", render: "" },
  { id: 3, name: "useDeferredValue", render: "" },
  { id: 4, name: "useEffect", render: UseEffectApp },
  { id: 5, name: "useLd", render: "" },
  { id: 6, name: "useImperativeHandle", render: "" },
  { id: 7, name: "useInsertionEffect", render: "" },
  { id: 8, name: "useLayoutEffect", render: "" },
  { id: 9, name: "useMemo", render: UseMemoApp },
  { id: 10, name: "useReducer", render: UseReducerApp },
  { id: 11, name: "useRef", render: UseRefApp },
  { id: 12, name: "useState", render: UseStateApp },
  { id: 13, name: "useSyncExternalStore", render: "" },
  { id: 14, name: "useTransition", render: "" },
];
