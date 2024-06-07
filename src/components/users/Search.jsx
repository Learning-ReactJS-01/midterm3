import axios from "axios";
import React, { useEffect, useState } from "react";
import Users from "./Users";
import { getSearchUsers } from "../data/api";
const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = sessionStorage.getItem("users");
    const savedText = sessionStorage.getItem("text");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const searchUsers = async (text) => {
    const usersData = await getSearchUsers(text);
    if (usersData) {
      setUsers(usersData);
      sessionStorage.setItem("users", JSON.stringify(usersData));
      sessionStorage.setItem("text", text);
    }
  };

  const clearUsers = () => {
    setUsers([]);
    sessionStorage.removeItem("users");
    sessionStorage.removeItem("text");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />

        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>

      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
