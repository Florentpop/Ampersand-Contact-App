import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import AppContainer from "./src/Navigation/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
