import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  const [theme, setTheme] = useState('light');











  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
{
  /* <Users users={users} /> */
}
//  <Search />
