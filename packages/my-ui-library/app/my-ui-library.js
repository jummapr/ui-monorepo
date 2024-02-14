import snabbdom from "snabbdom";
import counter from "../lib/ui-components/count.js";

export default function myUiLibrary() {
  let state = { count: 0 };

  const updateState = (newState) => {
    state = { ...state, ...newState };
    patch(el, view(state, updateState));
    console.log("State updated:", state);
  };

  const el = document.getElementById("app");
  const view = (state, updateState) => snabbdom.h(counter, state, updateState);
  patch(el, view(state, updateState));
  console.log("Component mounted");

  return updateState;
}
