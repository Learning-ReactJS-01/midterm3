import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getUser} from "./components/data/api";
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

