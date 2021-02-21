import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { CreateDragon, Dragons } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Dragons} />
    <Route exact path="/create" component={CreateDragon} />
  </BrowserRouter>
);

export default Routes;
