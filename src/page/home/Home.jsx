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

import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container px-0 h-screen flex flex-col justify-center mx-auto">
          <h3 className="text-base font-bold relative lg:text-xl cursor">
            HELLO WORLD
          </h3>
          <h1 className="text-red text-5xl lg:text-6xl font-bold">Paul Barrón</h1>
          <p className="lg:w-3/4 text-3xl lg:text-5xl font-black leading-tight">I started out building <span class="html font-regular">HTML</span> moved on to <span className="css">CSS</span> and now I'm controlling the two w/ <span className="javascript">JS</span>.</p>

          <div className="home-heading flex flex-wrap text-red leading-tight mt-6">
            <Link to="/projects" className="margin-button inline-block lg:text-2xl font-semibold px-4 py-2 leading-none border-2 rounded border-red text-red hover:border-transparent hover:bg-red hover:text-black">Projects</Link>

            <ul className="flex items-center text-2xl lg:text-4xl">
              <li>
                <a href="https://twitter.com/Paul__132">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="www.linkedin.com/in/paul-barron">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/pudpark36">
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCYZ0t_lWDlbdLVonbqpOg4g">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bio-pic">
          <div className="container mx-auto pl-3 pt-10">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2x"
              className="text-red"
            />
            <blockquote className="text-bold text-5xl leading-none pr-40">
              I like to build cool <br />
              stuff<span className="text-red">.</span>
              {/* <span className="text-4xl inline-block">
                <FontAwesomeIcon
                  icon={faAsterisk}
                  size="xs"
                  className="text-red flex"
                />
              </span> */}
            </blockquote>
          </div>
        </div>
      </>
    );
  }
}
