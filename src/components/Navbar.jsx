import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
// Components
import DarkModeToggle from './DarkModeToggle';
// assets
import engCV from '../assets/pdf/CV_MaximilianoBlanco_ENG.pdf';
import espCV from '../assets/pdf/CV_MaximilianoBlanco_ESP.pdf';

const Navbar = () => {
  return (
    <nav className="level navbar is-fixed-top is-transparent is-spaced">
      <div className="level-right" />
      <ul className="level-left">
        <li className="level-item">
          <button
            type="button"
            className="button is-white"
            onClick={() => scrollTo('#projects')}
          >
            <p>Proyects</p>
          </button>
        </li>
        <li className="level-item">
          <button type="button" className="button is-white">
            <p>Writings</p>
          </button>
        </li>
        <li className="level-item">
          <button
            type="button"
            className="button is-white"
            onClick={() => scrollTo('#contact')}
          >
            <p>Contact</p>
          </button>
        </li>
        <li className="level-item">
          <button
            type="button"
            className="button is-white"
            download
            href={engCV}
          >
            <p>CV</p>
          </button>
        </li>
        <li className="level-item">
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
