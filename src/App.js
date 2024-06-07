import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <Router>
        <Navbar theme={theme} setTheme={setTheme}  />
        <Home />
      </Router>
    </div>
  );
}
export default App;

