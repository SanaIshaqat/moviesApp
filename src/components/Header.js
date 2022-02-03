import React from "react";
import {Navbar, Col } from "react-bootstrap";
import "./Header.css";
import logo from "../LOGOmovies.png";


function Header() {
  return (
    <div>
      <Navbar className="Nav">
        <Col xs={6} id="logoCol">
          <img
            src={logo}
            alt="logo"
            to="/"
            id="logoImg"
          />
        </Col>
      </Navbar>
    </div>
  );
}

export default Header;