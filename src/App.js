import VendingMachine from "./VendingMachine";
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <VendingMachine />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
