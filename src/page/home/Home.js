import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="h-screen flex flex-col justify-center text-gray-100">
          <h3 className="text-base font-bold">
            HELLO WORLD<span className="cursor"></span>
          </h3>
          <h1 className="header-text text-red font-semibold">Paul Barrón</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius harum
            illo dicta adipisci, error, nam reiciendis dolores ut asperiores
            excepturi quia voluptatibus laudantium voluptatum, impedit
            doloremque. Officiis ab deleniti ipsa.
          </p>
          <ul className="flex justify-around text-red py-6">
            <li>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </li>
          </ul>
        </div>
      </>
    );
  }
}
