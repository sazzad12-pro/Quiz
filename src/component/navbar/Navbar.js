import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function NavScrollExample() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid className="item">
          <Navbar.Brand href="#" className="quiz">
            Today Quiz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="text-1">
              <Nav className="text " navbarScroll>
                <NavLink to="/">Topics</NavLink>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Statistics
                </NavLink>

                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Blog
                </NavLink>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;

/* <NavLink to="/">Topics</NavLink>
<NavLink
  to="/statistics"
  className={({ isActive }) => (isActive ? "active-link" : "link")}
>
  Statistics
</NavLink>
<NavLink
  to="/blog"
  className={({ isActive }) => (isActive ? "active-link" : "link")}
>
  Blog
</NavLink> */
