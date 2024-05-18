import React from 'react';
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

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
      <Navbar />
      <div className="container">
        <h1>Git Hub User data</h1>
        <Users users={users} />
      </div>
    </div>
  );
}
export default App;
