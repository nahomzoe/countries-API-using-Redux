import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavL = () => {
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey="/home"
      style={{ marginBottom: "3rem" }}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavL;
