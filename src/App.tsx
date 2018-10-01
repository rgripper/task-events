import * as React from "react";
import { Home } from "./Home/Home";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route path="/" component={Home}/>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
