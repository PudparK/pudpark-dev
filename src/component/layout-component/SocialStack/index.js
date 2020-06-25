import React from "react";
// import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialStack() {
  return (
    <ul className="text-3xl lg:text-4xl text-red">
      <li>
        <a className="noSelect-icon" href="https://twitter.com/Paul__132">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a
          className="noSelect-icon"
          href="https://www.linkedin.com/in/paul-barron"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a className="noSelect-icon" href="https://www.twitch.tv/pudpark36">
          <FontAwesomeIcon icon={faTwitch} />
        </a>
      </li>
      <li>
        <a
          className="noSelect-icon"
          href="https://www.youtube.com/channel/UCYZ0t_lWDlbdLVonbqpOg4g"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </li>
    </ul>
  );
}

export default SocialStack;
