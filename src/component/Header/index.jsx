import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerButton from "component/HamburgerButton/index";
import headerLinks from "./headerLinks.json";
import styles from "./styles.module.scss";
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
            exact
            activeClassName={styles.active}
            className="noSelect text-2xl font-semibold block lg:inline-block mt-4 lg:mt-0 mr-4"
            to={link.url}
            onClick={toggleClose}
            key={i}
          >
            {link.name}
          </NavLink>
        );
      } else {
        return (
          <a
            className="noSelect inline-block text-2xl font-semibold px-4 py-2 leading-none border-2 rounded border-red hover:border-transparent hover:bg-red hover:text-black mt-4 lg:mt-0"
            href={link.url}
            onClick={toggleClose}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
          >
            {link.name}
          </a>
        );
      }
    });
    return linksMap;
  }

  let mobileClose = isOpen ? "" : " " + styles.mobileClose;

  return (
    <div className={styles.header + " px-0 text-red"}>
      <div className="pk-container">
        <nav className="sub-container mx-auto py-3 items-center justify-between flex-wrap flex">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="noSelect" onClick={toggleClose}>
              <img
                className={styles.headerLogo}
                src={logo}
                alt="PudparK Developer"
              />
            </Link>
          </div>
          <HamburgerButton onClick={toggleHeader} isOpen={isOpen} />
          <div
            className={
              styles.mobileMenu + " w-full block lg:w-auto" + mobileClose
            }
          >
            <div className="text-xl">{getPageLinks()}</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
