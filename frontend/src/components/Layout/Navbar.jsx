import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="ms-3">
        CareerHub
      </Navbar.Brand>{" "}
      {/* Added ms-3 class for left padding */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/job/getall">All Jobs</Nav.Link>
          <Nav.Link href="/my-jobs">My Jobs</Nav.Link>
          <Nav.Link href="/post-job">Post Job</Nav.Link>
          <Nav.Link href="/my-application">My Applications</Nav.Link>
        </Nav>
        <Nav className="me-3">
          {" "}
          {/* Added me-3 class for right padding */}
          <NavDropdown
            title="Account"
            id="basic-nav-dropdown"
            align="end"
            onMouseOver={(e) => (e.target.style.color = "blue")} // Change text color of dropdown items on hover
            onMouseOut={(e) => (e.target.style.color = "")} // Restore default text color of dropdown items
          >
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
