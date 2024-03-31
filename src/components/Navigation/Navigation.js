import React from "react";

import { Link, } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import classNames from "classnames";

import { navigation } from "content";

import styles from "./Navigation.module.scss";

function Navigation() {

  const {
    schedule: ScheduleNavText,
    reception: ReceptionNavText,
    travel: TravelNavText,
    faq: FAQNavText,
    registry: RegistryNavText,
  } = navigation['English'];

  return (
    <Navbar variant="dark" expand="lg" sticky="top" className={styles.navigation}>
      <Link to="/" className={classNames("navbar-brand", styles.brand)}>
        J & E
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link to="/the-day" className="nav-link" role="button">
            <ScheduleNavText />
          </Link>
          <Link to="/the-night" className="nav-link" role="button">
            <ReceptionNavText />
          </Link>
          <Link to="/travel" className="nav-link" role="button">
            <TravelNavText />
          </Link>
          <Link to="/faq" className="nav-link" role="button">
            <FAQNavText />
          </Link>
          <Link to="/registry" className="nav-link" role="button">
            <RegistryNavText />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
