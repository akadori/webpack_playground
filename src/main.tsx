import React from "react";
import {render} from "react-dom";
// import { App } from "./App";
console.log("hogehoge")
render(<div>"ジュゲム"</div>, document.getElementById("root"));
if(process.env.NODE_ENV === "development") {
  render(<div>"開発環境だけで見えたい"</div>, document.getElementById("root2"));
}
