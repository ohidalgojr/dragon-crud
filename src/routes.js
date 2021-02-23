import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { CreateDragon, Dragons, Login } from "./pages";
import { isAuthenticated } from "./services/auth";
import { MainContainer } from "./containers";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Login} />
      <MainContainer>
        <PrivateRoute exact path="/dragons" component={Dragons} />
        <PrivateRoute exact path="/create" component={CreateDragon} />
        <Route render={() => <Redirect to="/dragons" />} />
      </MainContainer>
    </Switch>
  </>
);

export default Routes;
