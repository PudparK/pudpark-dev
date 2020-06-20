import React from "react";

import Home from "./page/home";
import Project from "./page/project";
import Blog from "./page/blog";
import Resume from "./page/resume/Resume";

import { Switch, Route } from "react-router-dom";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    );
  }
}
