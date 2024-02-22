import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import Dropdown from "react-bootstrap/Dropdown";
import ReactCountryFlag from "react-country-flag";
import classNames from "classnames";

import { selectLanguage } from "utilities/cookies";
import { LANGUAGE } from "actions/constants";
import { signOut } from "actions";
import { Store } from "store";
import { navigation } from "content";

import styles from "./Navigation.module.scss";

function Navigation() {
  const [cookies, setCookie] = useCookies(["language"]);
  const { state, dispatch } = useContext(Store);
  const navigate = useNavigate();

  const {
    app: {
      user: { name, isAuthenticated, email },
    },
  } = state;

  const handleSelectLanguage = (lang) => setCookie("language", lang, { path: "/" });

  const languageCodes = {
    [LANGUAGE.EN]: "UK",
  };

  const {
    schedule: ScheduleNavText,
    travel: TravelNavText,
    thingsToDo: ThingsToDoNavText,
    faq: FAQNavText,
    registry: RegistryNavText,
    rsvp: RSVPNavText,
    signOut: SignOutText,
    signIn: SignInText,
    manageRsvp: ManageRSVPText,
  } = navigation[selectLanguage(cookies)];

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
