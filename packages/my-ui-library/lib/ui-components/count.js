const snabbdom = require("snabbdom"); 



const counter = (state,updateState) => {
    const handleClick = () => {
        updateState({ count: state.count + 1 });
      };

      return snabbdom.h(
        'div',
        {class: "counter"},
        [
            snabbdom.h("h1",{}, `${state.count}`),
            snabbdom.h('button', { onClick: handleClick }, 'Add'),
        ]
      )
}

module.exports = counter