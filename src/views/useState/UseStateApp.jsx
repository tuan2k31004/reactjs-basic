import CounterApp from "./CounterApp/Counter";
import TextFieldApp from "./TextFieldApp/TextField";
import CheckboxApp from "./CheckboxApp/Checkbox";
import TwoUseStateApp from "./TwoUseStateApp/TwoUseState";
import ObjectApp from "./ObjectApp/Object";
import NestedObjectApp from "./NestedObjectApp/NestedObject";
import ListArrayApp from "./ArrayApp/ListArray";


export default function UseStateApp() {
  return (
    <div>
      <CounterApp/>
      <TextFieldApp/>
      <CheckboxApp/>
      <TwoUseStateApp/>
      <ObjectApp/>
      <NestedObjectApp/>
      <ListArrayApp/>
    </div>
  );
}
