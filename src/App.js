import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// layout-components
import Header from "component/layout-component/Header/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto px-3">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
