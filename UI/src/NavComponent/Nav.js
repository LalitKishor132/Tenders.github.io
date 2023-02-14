import "./Nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../AuthComponent/Auth";


function Nav() {
  const [NavContent, setNavContent] = useState();
  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") === "admin") {
        setNavContent(
          <div>
            {/* Start header */}
            <header className="top-navbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <a className="navbar-brand">
                    <h1>
                      <strong>
                        <Link to="/admin">Tenders</Link>
                      </strong>
                    </h1>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbars-rs-food"
                    aria-controls="navbars-rs-food"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbars-rs-food"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item ">
                        <a>
                          <Link className="nav-link" to="/admin">
                            Admin Home
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/manageuser">
                            Manage Users
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="dropdown-a"
                          data-toggle="dropdown"
                        >
                          Category
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdown-a"
                        >
                          <a className="dropdown-item">
                            <Link className="nav-link" to="/addcategory">
                              Add Category
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link className="nav-link" to="/addsubcategory">
                              Add SubCategory
                            </Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/logout">
                            Logout
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            {/* End header */}
          </div>
        );
      } else if (localStorage.getItem("role") === "user") {
        setNavContent(
          <div>
            {/* Start header */}
            <header className="top-navbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <a className="navbar-brand">
                    <h1>
                      <strong>
                        <Link to="/user">Tenders</Link>
                      </strong>
                    </h1>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbars-rs-food"
                    aria-controls="navbars-rs-food"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbars-rs-food"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item ">
                        <a>
                          <Link className="nav-link" to="/user">
                            User Home
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a>
                          <Link className="nav-link" to="/searchtenders">
                            Search Tenders
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/logout">
                            Logout
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            {/* End header */}
          </div>
        );
      } else {
        setNavContent(
          <div id="nav">
            {/* Start header */}
            <header className="top-navbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <a className="navbar-brand">
                    <h1>
                      <strong>
                        <Link to="/">Tenders</Link>
                      </strong>
                    </h1>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbars-rs-food"
                    aria-controls="navbars-rs-food"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbars-rs-food"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item ">
                        <a>
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/about">
                            About
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/contact">
                            Contact
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/service">
                            Service
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="dropdown-a"
                          data-toggle="dropdown"
                        >
                          Pages
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdown-a"
                        >
                          <a className="dropdown-item">
                            <Link className="nav-link" to="/reservation">
                              Reservation
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link className="nav-link" to="/stuff">
                              Stuff
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link className="nav-link" to="/gallary">
                              Gallary
                            </Link>
                          </a>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/register">
                            Register
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a>
                          <Link className="nav-link" to="/login">
                            Login
                          </Link>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            {/* End header */}
          </div>
        );
      }
    }, 2000);
  }, []);

  return (
    <div>
      
      {NavContent}
    </div>
  );
}

export default Nav;
