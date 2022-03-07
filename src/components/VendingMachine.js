import { NavLink } from "react-router-dom";

function VendingMachine (){
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/chocolate">
        Chocolate
      </NavLink>
      <NavLink exact to="/cookies">
        Cookies
      </NavLink>
    </nav>
  );
}

export default VendingMachine;