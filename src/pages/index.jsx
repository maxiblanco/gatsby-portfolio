import React, { useState, useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import lottie from 'lottie-web';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import ProyectCards from '../components/ProyectCard';
// Styles
import '../styles/index.scss';
// assets
import '../utils/fontawesome';
import animatedBlob from '../assets/animations/faster-blob-animation.json';


const Index = ({ data }) => {
  const [isImageHovered, setImageHovered] = useState(false);
  const animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animatedBlob,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);


  return (
    <main className="has-navbar-fixed-top">
      <div id="wrapper" className="container">
        <Navbar />
        <div className="absolute-container">
          <div className="sticky-container">
            <div
              className="animation-container"
              ref={animationContainer}
            />
          </div>
        </div>

        <Helmet>
          <title>Maximiliano Blanco</title>
          <script src="https://kit.fontawesome.com/77285598c3.js" crossOrigin="anonymous" />
        </Helmet>

        <section id="introduction" className="section">
          <div className="hero is-fullheight-with-navbar ">
            <div className="hero-body">
              <div
                className="container over-lottie"
                style={{ 'z-index': 899 }}
              >
                <div className="columns" style={{ 'z-index': 899 }}>
                  <div
                    className="column is-one-third is-hidden-touch"
                    onMouseEnter={() => setImageHovered(true)}
                    onMouseLeave={() => setImageHovered(false)}
                  >
                    {isImageHovered ? (
                      <Fade duration={1200}>
                        <img
                          className="peep-maxi"
                          src="https://i.imgur.com/8lMzsq3.png"
                          alt="Max with a mask"
                        />
                      </Fade>
                    ) : (
                      <Fade duration={1200}>
                        <img
                          className="peep-maxi"
                          src="https://i.imgur.com/69r4nw2.png"
                          alt="Max with a happy face"
                        />
                      </Fade>
                    )}
                  </div>
                  <div className="column " style={{ 'z-index': 899 }}>
                    <Fade>
                      <div className="my-4">
                        <h1 className="title is-1 is-size-2-touch has-text-weight-bold">
                          Hi! I'm Max.
                          <br />
                          A Web Developer.
                        </h1>
                      </div>
                    </Fade>
                    <Fade top cascade duration={3000}>
                      <div className="container my-7">
                        <p className="subtitle is-4 is-size-5-touch">
                          Every interaction tells a story.
                        </p>
                        <p className="subtitle is-4 is-size-5-touch">
                          I'm interested in how technology influences
                          the stories we tell each other.
                        </p>
                        <p className="subtitle is-4 is-size-5-touch">
                          I strive to develop software that makes each
                          story more engaging.
                        </p>
                        <div className="subtitle is-4 is-size-5-touch mt-4">
                          <a href="https://www.linkedin.com/in/maxiblanco/">
                            <FontAwesomeIcon
                              className="mx-3 my-3 is-size-1 is-size-2-touch"
                              icon={['fab', 'linkedin']}
                            />
                          </a>
                          <a href="https://github.com/maxiblanco">
                            <FontAwesomeIcon
                              className="mx-3 my-3 is-size-1 is-size-2-touch"
                              icon={['fab', 'github']}
                            />
                          </a>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered ">
                    <Flip duration={800} delay={2000} top>
                      <button
                        type="button"
                        className="button mt-7 is-size-5-touch is-rounded more-button is-large is-pulled-right has-text-light has-background-grey-dark"
                        onClick={() => scrollTo('#projects')}
                      >
                        <span>Projects</span>

                        <FontAwesomeIcon
                          className="ml-3 is-size-4 is-size-5-touch"
                          icon={['fa', 'eye']}
                        />
                      </button>
                    </Flip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section ">
          <div className="hero is-fullheight ">
            <div className="hero-body">
              <Fade bottom duration={1200}>
                <div className="container">
                  <ProyectCards  />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container hero is-fullheight-with-navbar">
            <div className="columns hero-body is-centered">
              <div className="box column is-three-quarters">
                <ContactForm data={data} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="container over-lottie">
          <div className="has-text-centered">
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

          <div className="level mt-6 mb-2">
            <a className="level-item" href="https://bulma.io">
              <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
            </a>
          </div>
          <p className="has-text-centered my-2">
            Made by 
            {' '}
            <strong>Maximiliano Blanco</strong>
            &#169; 2020
          </p>
        </div>
        
      </footer>
    </main>
  );
};

export default Index;
