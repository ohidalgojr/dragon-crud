import { Route } from "react-router";
import "./App.css";

import Routes from "./routes";
import { Menu } from "./components";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
};

export default App;
