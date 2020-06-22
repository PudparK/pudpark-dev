import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faQuoteLeft, faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <React.Fragment>
      <div className="sub-container h-screen flex flex-col justify-center">
        <h3 className="text-base font-bold relative lg:text-xl cursor">
          HELLO WORLD
        </h3>
        <h1 className="text-red text-5xl sm:text-6xl font-bold">Paul Barrón</h1>
        <p className="lg:w-3/4 text-3xl sm:text-5xl font-black leading-tight mb-6">
          I started out building <span className="hCallout">HTML</span> moved on
          to <span className="hCallout">CSS</span> and now I'm controlling the
          two w/
          <span className="hCallout"> JS</span>.
        </p>

        <div className="home-heading text-red">
          <ul className="flex flex-wrap items-center text-3xl lg:text-4xl">
            <li className="block sm:inline-block">
              <Link
                to="/projects"
                className="block sm:inline-block text-center sm:inline-block text-2xl font-semibold px-4 py-0 border-2 rounded border-red text-red hover:border-transparent hover:bg-red hover:text-black noSelect"
              >
                Projects
              </Link>
            </li>
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
              <a
                className="noSelect-icon"
                href="https://www.twitch.tv/pudpark36"
              >
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
        </div>
      </div>
      <div className="sub-container flex flex-col justify-center bio-pic">
        <div className="">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="text-red" />
          <blockquote className="w-1/2 text-5xl leading-none">
            I like to build dope sh
            <span className="text-4xl inline-block">
              <FontAwesomeIcon
                icon={faAsterisk}
                size="xs"
                className="text-red flex"
              />
            </span>
            t with cool people.
          </blockquote>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
