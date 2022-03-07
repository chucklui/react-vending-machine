import { Route, Switch } from "react-router-dom";

function Routes() {
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/chips">
      <Chips />
    </Route>
    <Route exact path="/chocolate">
      <Chocolate />
    </Route>
    <Route exact path="/cookies">
      <Cookies />
    </Route>
  </Switch>
}
export default Routes;
