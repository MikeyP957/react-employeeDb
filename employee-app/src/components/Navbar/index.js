import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
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
