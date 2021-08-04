import Container from "../../components/container/Container";
import { Link } from "react-router-dom";

const Home = () => (
  <Container style={{ display: "grid" }}>
    <h1>This is Home</h1>
    <Link to="/login">Login</Link>
    <Link to="/verify">Verify</Link>
    <Link to="/recovery">Recovery</Link>
    <Link to={"/data"}>Data</Link>
    <Link to={"/locations"}>Location</Link>
  </Container>
);

export default Home;
