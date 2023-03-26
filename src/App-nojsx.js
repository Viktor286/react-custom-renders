import { jsx as constructorFunction } from "react/jsx-runtime";
import { jsxs as constructorFunctionS } from "react/jsx-runtime";
function App() {
  return constructorFunction("div", {
    className: "App",
    children: constructorFunctionS("header", {
      className: "App-header",
      children: [constructorFunction("a", {
        className: "App-link",
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "999999"
      })]
    })
  });
}

export default App;
