import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// layout-components
import Header from "component/layout-component/Header/Header";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return ( <
    Router >
    <
    div >
    <
    Header / >

    {
      /* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */
    } <
    Switch >
    <
    Route exact path = "/about" >
    <
    p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum. <
    /p> <
    /Route> <
    Route exact path = "/about/author" > < /Route> <
    Route path = "/" >
    <
    p >
    The passage experienced a surge in popularity during the 1960 s when Letraset used it on their dry - transfer sheets, and again during the 90 s as desktop publishers bundled the text with their software.Today it 's seen all around the web; on templates,
    websites, and stock designs.Use our generator to get your own, or read on
    for the authoritative history of lorem ipsum. <
    /p> <
    /Route> <
    /Switch> <
    /div> <
    /Router>
  );
}

export default App;