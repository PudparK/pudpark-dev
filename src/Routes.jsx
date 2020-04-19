import React from "react";

import Home from "./page/home/Home";
import Project from "./page/project/Project";
import Blog from "./page/blog/Blog";
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
