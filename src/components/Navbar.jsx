import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';
// Components
import DarkModeToggle from './DarkModeToggle';
// assets
import engCV from '../assets/pdf/CV_MaximilianoBlanco_ENG.pdf';
import espCV from '../assets/pdf/CV_MaximilianoBlanco_ESP.pdf';

const Navbar = () => {
  return (
    <nav
      className="navbar is-fixed-top is-transparent is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-end">
          <li className="navbar-item">
            <button
              type="button"
              className="button is-white is-medium"
              onClick={() => scrollTo('#projects')}
            >
              <p>Projects</p>
            </button>
          </li>
          <li className="navbar-item">
            <Link to="blog">
              <button
                type="button"
                className="button is-white disabled is-medium"
                disabled
              >
                <p>Writings</p>
              </button>
            </Link>
          </li>
          <li className="navbar-item">
            <button
              type="button"
              className="button is-white is-medium"
              onClick={() => scrollTo('#contact')}
            >
              <p>Contact</p>
            </button>
          </li>
          <li className="navbar-item">
            <button type="button" className="button is-white is-medium ">
              <a
                download
                href="/CV_MaximilianoBlanco_ENG.pdf"
                className="has-text-black"
              >
                <p>CV</p>
              </a>
            </button>
          </li>
          <li className="navbar-item">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
