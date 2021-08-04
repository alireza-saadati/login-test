import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/loginPage/LoginPage";
import VerifyPage from "./pages/verifyPage/VerifyPage";
import RecoveryPassword from "./pages/recoveryPassword/RecoveryPassword";
import DataPage from "./pages/dataPage/DataPage";
import Locations from "./pages/locations/Location";
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";

function App() {
  return (
    <Router>
      <Route component={LoginPage} path={"/login"} />
      <Route component={VerifyPage} path={"/verify"} />
      <Route component={RecoveryPassword} path={"/recovery"} />
      <Route component={DataPage} path={"/data"} />
      <Route component={Locations} path={"/locations"} />
      <Route component={Home} path={"/"} exact />
      <Route component={Friends} path={"/friends"} />
    </Router>
  );
}

export default App;
