import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
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
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
{
  /* <Users users={users} /> */
}
//  <Search />
