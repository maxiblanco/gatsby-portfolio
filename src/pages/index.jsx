import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
// Styles
import 'normalize.css';
import '../styles/index.scss';
// icons
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Index() {
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
      <Helmet>
        <title>Maximiliano Blanco</title>
      </Helmet>
      <section>
        <Fade right>
          <h1>Maximiliano Blanco - Portfolio</h1>
          <p>Convincing text, now you will want to hire me.</p>
        </Fade>
      </section>
      <section>
        <h2>Proyect</h2>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
        <div className="container">
          <div className="content">
            <Fade bottom>
              <img
                src="https://via.placeholder.com/300.png?text=Proyect"
                alt="1"
              />
            </Fade>
            <Fade top>
              <img
                src="https://via.placeholder.com/300.png?text=Proyect"
                alt="2"
              />
            </Fade>

            <Fade left>
              <img
                src="https://via.placeholder.com/300.png?text=Proyect"
                alt="3"
              />
            </Fade>
            <Fade top>
              <img
                src="https://via.placeholder.com/300.png?text=Proyect"
                alt="4"
              />
            </Fade>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
