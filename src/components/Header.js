import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useHistory } from "react-router-dom";
import firebase from "../config/firebase";

function Header() {
  const [isLoggeIn, setisLoggeIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setisLoggeIn(true);
      }
      console.log(user);
    });
  }, []);

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setisLoggeIn(false);
        history.replace("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <nav className=" py-4 border bg-gray-900 text-white">
      <ul className="flex justify-between text-2xl px-10">
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        <li>
          {isLoggeIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
