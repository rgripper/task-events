import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from "emotion";

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;

    &, #root {
      min-height: 100vh;
    }
  }
`

ReactDOM.render(<App/>, document.getElementById("root") as HTMLElement);
registerServiceWorker();
