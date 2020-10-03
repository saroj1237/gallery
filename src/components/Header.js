import React from "react";
import { BrowserRouter as Link } from "react-router-dom";


function Header() {
  return (
    <nav className=" py-4 border bg-gray-900 text-white">
    <ul className="flex justify-between text-2xl px-10">
      <span className="flex">
        <li className="mr-5">
          <Link to="/">Home</Link>
        </li >
        <li  className="mr-5">
          <Link to="/gallery">Gallery</Link>
        </li>
      </span>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Header;
