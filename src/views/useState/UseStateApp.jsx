import CounterApp from "./CounterApp/Counter";
import TextFieldApp from "./TextFieldApp/TextField";
import CheckboxApp from "./CheckboxApp/Checkbox";
import TwoUseStateApp from "./TwoUseStateApp/TwoUseState";
import ObjectApp from "./ObjectApp/Object";
import NestedObjectApp from "./NestedObjectApp/NestedObject";
import ListArrayApp from "./ArrayApp/ListArray";
import { useState } from "react";

export default function UseStateApp() {
  let app = [
    { render: <CounterApp />, name: "CounterApp" },
    { render: <TextFieldApp />, name: "TextFieldApp" },
    { render: <CheckboxApp />, name: "CheckboxApp" },
    { render: <TwoUseStateApp />, name: "TwoUseStateApp" },
    { render: <ObjectApp />, name: "ObjectApp" },
    { render: <NestedObjectApp />, name: "NestedObjectApp" },
    { render: <ListArrayApp />, name: "ListArrayApp" },
  ];
  const [isShow, setIsShow] = useState(<CounterApp />);
  return (
    <div>
      <fieldset style={{ minHeight: "300px", maxWidth: "700px" }}>
        <legend>
          {app.map((a) => (
            <button
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
