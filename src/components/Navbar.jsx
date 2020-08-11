import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';
// Components
import DarkModeToggle from './DarkModeToggle';
// assets
/* 
import engCV from '../assets/pdf/CV_MaximilianoBlanco_ENG.pdf';
import espCV from '../assets/pdf/CV_MaximilianoBlanco_ESP.pdf'; 
*/

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <nav
      className="navbar is-fixed-top is-transparent is-spaced over-lottie"
      role="navigation"
      aria-label="main navigation">
      <div
        className={
          menuOpened ? 'dropdown is-active over-all' : 'dropdown'
        }>
        <div className="dropdown-trigger is-pulled-right">
          <div
            role="button"
            tabIndex="0"
            onClick={() => setMenuOpened(!menuOpened)}
            onKeyDown={() => setMenuOpened(!menuOpened)}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        {menuOpened ? (
          <Fade left duration={300}>
            <div
              className="dropdown-menu"
              id="dropdown-menu2"
              role="menu">
              <div className="dropdown-content has-text-centered">
                <div className="dropdown-item">
                  <button
                    type="button"
                    className="button is-white is-medium has-text-weight-semibold"
                    onClick={() => scrollTo('#projects')}>
                    <p>Projects</p>
                  </button>
                </div>
                <hr className="dropdown-divider" />
                <div className="dropdown-item">
                  <button
                    type="button"
                    className="button is-white is-medium has-text-weight-semibold"
                    onClick={() => scrollTo('#contact')}>
                    <p>Contact</p>
                  </button>
                </div>
                <hr className="dropdown-divider" />
                <div className="dropdown-item">
                  <button
                    type="button"
                    className="button is-white is-medium has-text-weight-semibold">
                    <a
                      download
                      href="/CV_MaximilianoBlanco_ENG.pdf"
                      className="has-text-black">
                      <p>CV</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ) : null}
      </div>
      <div className="navbar-menu">
        <ul className="navbar-end">
          <li className="navbar-item">
            <button
              type="button"
              className="button is-white is-medium has-text-weight-semibold"
              onClick={() => scrollTo('#projects')}>
              <p>Projects</p>
            </button>
          </li>
          {/*           <li className="navbar-item">
            <Link to="blog">
              <button
                type="button"
                className="button is-white disabled is-medium has-text-weight-semibold"
                disabled
              >
                <p>Writings</p>
              </button>
            </Link>
          </li> */}
          <li className="navbar-item">
            <button
              type="button"
              className="button is-white is-medium has-text-weight-semibold"
              onClick={() => scrollTo('#contact')}>
              <p>Contact</p>
            </button>
          </li>
          <li className="navbar-item">
            <button
              type="button"
              className="button is-white is-medium has-text-weight-semibold">
              <a
                download
                href="/CV_MaximilianoBlanco_ENG.pdf"
                className="has-text-black">
                <p>CV</p>
              </a>
            </button>
          </li>
          {/*           <li className="navbar-item">
            <DarkModeToggle />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
