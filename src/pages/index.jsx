import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import Navbar from '../components/navbar';
// Styles
import '../styles/index.scss';
// icons
import '../utils/fontawesome';

const Index = () => {
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
      <div className="container">
        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>
        <header>
          <div className="container">
            <Navbar />
          </div>
        </header>

        <section className="section">
          <div className="hero">
            <div className="hero-body">
              <div className="my-4">
                <h1 className="title is-1 has-text-weight-bold">
                  Hi! I'm Max.
                  <br />A Web Developer.
                </h1>
              </div>

              <Fade slower>
                <div className="container">
                  <p className="subtitle is-4">
                    Every interaction tells a story.
                  </p>
                  <p className="subtitle is-4">
                    I’m interested in how technology influences the stories we
                    tell each other.
                  </p>
                  <p className="subtitle is-4">
                    I strive to develop software that makes each story more
                    engaging.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="hero">
            <div className="hero-body">
              <div className="columns">
                <div className=" column is-half">
                  <div className="media box">
                    <img
                      src="https://via.placeholder.com/300.png?text=Project"
                      alt=""
                    />
                  </div>
                </div>
                <div className="column is-half">
                  <article className="media box">
                    <figure>
                      <img
                        src="https://via.placeholder.com/200x300.png?text=Project"
                        alt=""
                      />
                    </figure>
                  </article>
                </div>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <article className="media box">
                    <figure>
                      <img
                        src="https://via.placeholder.com/200x300.png?text=Project"
                        alt=""
                      />
                    </figure>
                  </article>
                </div>
                <div className="column is-half">
                  <article className="media box">
                    <figure>
                      <img
                        src="https://via.placeholder.com/300.png?text=Project"
                        alt=""
                      />
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className=" has-text-centered">
            <a href="https://www.linkedin.com/in/maxiblanco/">
              <FontAwesomeIcon
                className="mx-3 my-3 is-size-3"
                icon={['fab', 'linkedin']}
              />
            </a>
            <a href="https://github.com/maxiblanco">
              <FontAwesomeIcon
                className="mx-3 my-3 is-size-3"
                icon={['fab', 'github']}
              />
            </a>
          </div>
          <p className="has-text-centered">
            Work in progress by <strong>Maximiliano Blanco</strong> &#169; 2020
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
