import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// assets
import engCV from '../assets/pdf/CV_MaximilianoBlanco_ENG.pdf';
import espCV from '../assets/pdf/CV_MaximilianoBlanco_ESP.pdf';

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useState(false);
  return (
    <nav className="level navbar">
      <div className="toggle level-right">
        {darkMode ? (
          <button type="button" className="button is-white">
            <span className="icon">
              <FontAwesomeIcon
                onClick={() => toggleDarkMode(!darkMode)}
                className="is-size-3"
                icon={['fas', 'toggle-on']}
              />
            </span>
          </button>
        ) : (
          <button type="button" className="button is-white">
            <span className="icon">
              <FontAwesomeIcon
                onClick={() => toggleDarkMode(!darkMode)}
                className="is-size-3"
                icon={['fas', 'toggle-off']}
              />
            </span>
          </button>
        )}
      </div>
      <ul className="level-left">
        <li className="level-item">
          <a className="button is-white" href="https://github.com/maxiblanco">
            <p>Proyects</p>
          </a>
        </li>
        <li className="level-item">
          <a className="button is-white" href="_blank">
            <p>Blog</p>
          </a>
        </li>
        <li className="level-item">
          <a className="button is-white" href="mailto:maezblanco@gmail.com">
            <p>Contact</p>
          </a>
        </li>
        <li className="level-item">
          <a className="button is-white" download href={engCV}>
            <p>CV</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
