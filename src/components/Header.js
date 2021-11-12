import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/home">
            <Navbar.Brand>Shop-Pro</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/cart">
                <Nav.Link href="/cart">
                  <FaCartArrowDown className="mx-2" />
                  Cart
                </Nav.Link>
              </Link>

              <Link to="/login">
                <Nav.Link href="/login">
                  <FaUserAlt className="mx-2" />
                  Login
                </Nav.Link>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
