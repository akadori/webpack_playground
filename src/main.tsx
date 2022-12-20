import React from "react";
import {render} from "react-dom";
const App = () => {
  return <>
    <div>test</div>
    {process.env.NODE_ENV !== "production" && <div>test for dev</div>}
    </>;
};

render(App(), document.getElementById("root"));
