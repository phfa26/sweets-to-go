import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand {
    font-weight: 600;
    color: #ffa8ca;
    font-size: 1.5rem;
    padding-left: 2rem;
    letter-spacing: 1px;

    &:hover {
      color: #ffa8ca;
    }
  }

  .navbar-nav .nav-link {
    color: #9bf2d7;
    font-weight: 400;
    padding: 1rem 2rem;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/sweets-to-go/">Sweets To Go</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/sweets-to-go/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sweets-to-go/menu">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sweets-to-go/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sweets-to-go/account">Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sweets-to-go/purchase">
              <i className="fas fa-shopping-cart" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
