import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
// Styles
import 'normalize.css';
import '../styles/index.scss';
// icons
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Index = () => {
  /*   const [darkMode, toggleDarkMode] = useState(false); */
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <div className="main--container center">
        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>
        <header>
          <div className="toggle">
            <FontAwesomeIcon
              icon={['fas', 'toggle-off']}
              width="100px"
              height="100px"
            />
            <FontAwesomeIcon icon={['fas', 'toggle-on']} />
          </div>
        </header>
        <section>
          <div className="title--container">
            <div className="title--content">
              <h1>Hi! I'm Max.</h1>
              <h1>A Web Developer.</h1>
            </div>
          </div>
          <div className="nav--container">
            <div className="nav--content">
              <nav>
                <ul>
                  <li>Proyects</li>
                  <li>Blog</li>
                  <li>Contact</li>
                  <li>
                    {' '}
                    <a
                      download
                      href="../assets/pdf/CV_MaximilianoBlanco_ENG.pdf"
                    >
                      CV
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <Fade slower>
            <div className="message--container">
              <div className="message--content">
                <p>Every interaction tells a story.</p>
                <p>
                  I’m interested in how technology influences the stories we
                  tell each other.
                </p>
                <p>
                  I strive develop software that makes each story more engaging.
                </p>
              </div>
            </div>
          </Fade>
        </section>
        <footer>
          <div className="footer--container">
            <div className="footer--content">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/maxiblanco/">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
                <a href="https://github.com/maxiblanco">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </div>
              <p>Work in progress by Maximiliano Blanco &#169; 2020</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
