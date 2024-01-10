import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  to="/red"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Red
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link
                  to="/blue"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Blue
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );

  {
    /* <div>
      <Link to="/">Home</Link>
      <Link to="/red">Red</Link>
      <Link to="/blue">Blue</Link>
    </div>
  ); */
  }
}
