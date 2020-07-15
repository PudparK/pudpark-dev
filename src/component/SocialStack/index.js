import React from "react";
import styles from "./styles.module.scss";
// import { faHandPointUp } from "@fortawesome/free-regular-svg-icons";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialStack({ className }) {
  return (
    <div
      className={
        styles.socialStack + " flex flex-col items-center hidden lg:flex"
      }
    >
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
        <li>
          <a
            className="noSelect-icon"
            href="https://www.youtube.com/channel/UCYZ0t_lWDlbdLVonbqpOg4g"
          >
            <FontAwesomeIcon icon={faHandPointUp} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialStack;
