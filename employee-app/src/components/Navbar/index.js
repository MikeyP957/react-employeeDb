import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sort"
              className={window.location.pathname === "/sort" ? "nav-link active" : "nav-link"}
            >
              Sort
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/filter"
              className={window.location.pathname === "/filter" ? "nav-link active" : "nav-link"}
            >
              Filter
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
