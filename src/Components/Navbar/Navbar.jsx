import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { NAV_LIST_ENUMS } from "../constants";

const Navbar = () => {
  const handleNavigation = (event, link) => {
    if (link === "/resume") {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", link);
    window.dispatchEvent(new PopStateEvent("popstate"));

    if (link.includes("#")) {
      const id = link.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
     <div className="navbar">
      <a href="/" onClick={(event) => handleNavigation(event, "/")}>
        <img id="logo-img" src={logo} alt="logo" />
      </a>
      <ul className="nav-menu">
        {NAV_LIST_ENUMS.map(({ text, link }) => (
          <li key={text}>
            <a href={link} onClick={(event) => handleNavigation(event, link)}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <a className="nav-connect" href="mailto:jasmine@example.com">Contact Me</a>
    </div>
  )
}

export default Navbar
