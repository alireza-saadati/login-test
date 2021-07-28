import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import "./App.scss";
import VerifyPage from "./pages/verifyPage/VerifyPage";

function App() {
  return (
    <Router>
      <Route component={LoginPage} path={"/login"} />
      <Route component={VerifyPage} path={"/verify"} />
    </Router>
  );
}

export default App;
