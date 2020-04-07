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
          <h3 className="text-base font-bold relative">
            HELLO WORLD<span className="cursor absolute"></span>
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
              <a href="https://twitter.com/Paul__132">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/paul-barron">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/pudpark36">
                <FontAwesomeIcon icon={faTwitch} size="2x" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCYZ0t_lWDlbdLVonbqpOg4g">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
