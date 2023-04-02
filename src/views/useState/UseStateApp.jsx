import CounterApp from "./CounterApp/Counter";
import TextFieldApp from "./TextFieldApp/TextField";
import CheckboxApp from "./CheckboxApp/Checkbox";
import TwoUseStateApp from "./TwoUseStateApp/TwoUseState";
import ObjectApp from "./ObjectApp/Object";
import NestedObjectApp from "./NestedObjectApp/NestedObject";
import ListArrayApp from "./ArrayApp/ListArray";

export let UseStateApp = [
  { id: 0, render: <CounterApp />, name: "CounterApp" },
  { id: 1, render: <TextFieldApp />, name: "TextFieldApp" },
  { id: 2, render: <CheckboxApp />, name: "CheckboxApp" },
  { id: 3, render: <TwoUseStateApp />, name: "TwoUseStateApp" },
  { id: 4, render: <ObjectApp />, name: "ObjectApp" },
  { id: 5, render: <NestedObjectApp />, name: "NestedObjectApp" },
  { id: 6, render: <ListArrayApp />, name: "ListArrayApp" },
];
