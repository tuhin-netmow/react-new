import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Header() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setMenuShow(!menuShow)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {menuShow && (
              <div className="navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">
                      Blogs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
