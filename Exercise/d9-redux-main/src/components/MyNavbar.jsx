import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <>
      <Navbar
        expand="md"
        bg="secondary"
        variant="light"
        className="border-bottom border-black"
      >
        <Container className="justify-content-center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center">
              <Link
                as={Link}
                to="/"
                className="title fs-3 text-dark-emphasis nav-link"
              >
                Home
              </Link>

              <Link
                as={Link}
                to="/favourites"
                className="text-dark-emphasis title fs-3 nav-link"
              >
                Favourites Works
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
