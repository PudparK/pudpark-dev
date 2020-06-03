import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerButton from "component/layout-component/HamburgerButton/index";
import headerLinks from "./headerLinks.json";
import "./Header.css";
import logo from "./pk-development-large-bg-white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHeader() {
    setIsOpen(!isOpen);
  }

  function toggleClose() {
    setIsOpen(false);
  }

  function getPageLinks() {
    const links = headerLinks.links;

    const linksMap = links.map((link, i) => {
      if (link.type === "general") {
        return (
          <NavLink
            activeClassName="active"
            className="text-2xl font-semibold block lg:inline-block mt-4 lg:mt-0 mr-4"
            to={link.url}
            onClick={toggleClose}
            key={i}
          >
            {link.name}
          </NavLink>
        );
      } else {
        return (
          <NavLink
            activeClassName="active-button"
            className="noSelect inline-block text-2xl font-semibold px-4 py-2 leading-none border-2 rounded border-red text-red hover:border-transparent hover:bg-red hover:text-black mt-4 lg:mt-0"
            to={link.url}
            onClick={toggleClose}
            key={i}
          >
            {link.name}
          </NavLink>
        );
      }
    });
    return linksMap;
  }

  let mobileClose = isOpen ? "" : " mobile-close";

  return (
    <div className="header px-0">
      <nav className="pk-container mx-auto py-3 items-center justify-between flex-wrap flex">
        <div className="flex items-center flex-shrink-0">
          <Link to="/" onClick={toggleClose}>
            <img className="header-logo p" src={logo} alt="PudparK Developer" />
          </Link>
        </div>
        <HamburgerButton onClick={toggleHeader} isOpen={isOpen} />
        <div className={"mobile-menu w-full block lg:w-auto" + mobileClose}>
          <div className="text-xl">{getPageLinks()}</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
