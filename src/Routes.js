import { Route, Switch } from "react-router-dom";

import VendingMachine from "./components/VendingMachine";
import Chips from './components/Chips';
import Chocolate from './components/Chocolate';
import Cookies from './components/Cookies';

function Routes() {
  
  return(
  <Switch>
    <Route exact path="/">
      <VendingMachine />
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
  </Switch>)
}
export default Routes;
