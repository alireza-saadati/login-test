import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/loginPage/LoginPage";
import VerifyPage from "./pages/verifyPage/VerifyPage";
import RecoveryPassword from "./pages/recoveryPassword/RecoveryPassword";
import DataPage from "./pages/dataPage/DataPage";

function App() {
  return (
    <Router>
      <Route component={LoginPage} path={"/login"} />
      <Route component={VerifyPage} path={"/verify"} />
      <Route component={RecoveryPassword} path={"/recovery"} />
      <Route component={DataPage} path={"/data"} />
    </Router>
  );
}

export default App;
