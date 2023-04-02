import { useState } from "react";
import HookApp from "./HookApp";
import { hook } from "./HookApp";

export default function Hook() {
  const [display, setDisplay] = useState(true);
  const [isHook, setIsHook] = useState("");
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
      {!display && isHook && (
        <>
          <h3>{isHook.name}</h3>
          {<HookApp hook={isHook.render} />}
        </>
      )}
    </div>
  );
}
