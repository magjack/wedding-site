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
    [LANGUAGE.CAT]: "ES-CT",
    [LANGUAGE.EN]: "US",
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
        S & L
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link to="/schedule" className="nav-link" role="button">
            <ScheduleNavText />
          </Link>
          <Link to="/travel" className="nav-link" role="button">
            <TravelNavText />
          </Link>
          <Link to="/things-to-do" className="nav-link" role="button">
            <ThingsToDoNavText />
          </Link>
          <Link to="/faq" className="nav-link" role="button">
            <FAQNavText />
          </Link>
          <Link to="/registry" className="nav-link" role="button">
            <RegistryNavText />
          </Link>
          <Link to="/rsvp" className="nav-link" role="button">
            <RSVPNavText />
          </Link>
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={Nav.Link}>{name}</Dropdown.Toggle>
              <Dropdown.Menu alignRight>
                <Dropdown.Item className={styles.email}>
                  <strong>{email}</strong>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/rsvp")}>
                  <ManageRSVPText />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link to="/auth" className="nav-link" role="button">
              <SignInText />
            </Link>
          )}
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={Nav.Link}>
              <ReactCountryFlag countryCode={languageCodes[selectLanguage(cookies)]} svg />{" "}
              {selectLanguage(cookies)}
            </Dropdown.Toggle>
            <Dropdown.Menu alignRight>
              <Dropdown.Item eventKey={LANGUAGE.EN} onClick={() => handleSelectLanguage(LANGUAGE.EN)}>
                <ReactCountryFlag countryCode="US" svg /> {LANGUAGE.EN}
              </Dropdown.Item>
              <Dropdown.Item eventKey={LANGUAGE.CAT} onClick={() => handleSelectLanguage(LANGUAGE.CAT)}>
                <ReactCountryFlag countryCode="ES-CT" svg /> {LANGUAGE.CAT}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
