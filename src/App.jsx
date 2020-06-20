import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// layout-components
import Header from "component/layout-component/Header";
import Container from "component/layout-component/Container";
// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
