import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
function NavBar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container className="navbar">
        <Navbar.Brand className="introText" href="#home">
         <b> About </b>
          <span className="introName">Me</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="desktopMenuListItem" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="desktopMenuListItem" href="/skills">
              Experience
            </Nav.Link>
            <Nav.Link className="desktopMenuListItem" href="/education">
              Education
            </Nav.Link>
            <Nav.Link className="desktopMenuListItem" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
