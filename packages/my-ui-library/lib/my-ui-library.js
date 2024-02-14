import { h, init, eventListenersModule } from "snabbdom";
// const { h, init,eventListenersModule, } = require("snabbdom");

const myUiLibrary = () => {
  const patch = init([eventListenersModule]);

  let state = { count: 1 };

  const createH1 = (state) => h("h1", {}, state.count);

  function createTemplate(state, props) {
    console.log(state);
    return h("div#app", [
      h("h1", {}, state.count),
      h("button", { on: { click: (e) => increment() } }, "Increment"),
      h("button", { on: { click: (e) => decrement() } }, "Decrement"),
      h("button", { on: { click: (e) => reset() } }, "Reset"),
    ]);
  }

  const increment = (e) => {
    updateState({ count: state.count + 1 });
  };
  const decrement = (e) => {
    if(state.count > 0){
      updateState({ count: state.count - 1 });
    }
  };
  const reset = (e) => {
    updateState({ count: (state.count = 0) });
  };

  function updateState(newState) {
    state = { ...state, ...newState };
    const newVNode = createH1(state);
    patch(document.querySelector("h1"), newVNode);
    console.log("State updated:", state);
  }

  function onMount() {
    console.log("Component is mounted");
  }

  const initialVNode = createTemplate(state, {});
  const container = document.createElement("div");
  document.body.appendChild(container);
  patch(container, initialVNode);

  onMount();
};

myUiLibrary();

module.exports = myUiLibrary;
