import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/tentang-kami" activeClassName="active">
              Tentang Kami
            </Nav.Link>

            <Nav.Link as={NavLink} to="/kontak-kami" activeClassName="active">
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
