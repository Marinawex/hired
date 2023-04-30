import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../modals/Signup";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Hired</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">settings</Nav.Link>
            <Login />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
