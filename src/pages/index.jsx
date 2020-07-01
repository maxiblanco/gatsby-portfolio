import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
/* import Fade from 'react-reveal/Fade'; */
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
          <FontAwesomeIcon icon={['fas', 'toggle-off']} />
          <FontAwesomeIcon icon={['fas', 'toggle-on']} />
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
                  <li>CV</li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="message--container">
            <div className="message--content">
              <p>Every interaction tells a story.</p>
              <p>
                I’m interested in how technology influences the stories we tell
                each other.
              </p>
              <p>
                I strive develop software that makes each story more engaging.
              </p>
              <p>
                I currently live in Villa Crespo, a neighborhood of Buenos
                Aires, Argentina.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer--container">
            <div className="footer--content">
              <div className="social-links">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
              <p>Maximiliano Blanco &#169; 2020</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
