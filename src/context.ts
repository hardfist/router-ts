import React from "react";
const Context = React.createContext({
  path: "/"
});
const { Provider, Consumer } = Context;
export { Provider, Consumer, Context };
