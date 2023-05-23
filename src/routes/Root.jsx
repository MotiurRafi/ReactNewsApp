import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";


export default class Root extends Component {

  render() {
    return (
      <div className="">
        <nav className=" fixed-top navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              News Storm
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/"}>general</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/business"}>business</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/entertainment"}>entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/health"}>health</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/science"}>science</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/sports"}>sports</Link></li>
                <li className="nav-item"><Link className="nav-link" aria-current="page" to={"/technology"}>technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="detail container">
            <Outlet />
        </div>
      </div>
    );
  }
}
