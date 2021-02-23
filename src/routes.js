import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { CreateDragon, Dragons, Login, ViewDragon } from "./pages";
import { MainContainer } from "./containers/MainContainer";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <MainContainer>
          <Component {...props} />
        </MainContainer>
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
      <PrivateRoute exact path="/dragons" component={Dragons} />
      <PrivateRoute exact path="/create" component={CreateDragon} />
      <PrivateRoute exact path="/dragon/:id" component={ViewDragon} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
