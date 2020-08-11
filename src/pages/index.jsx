import React, { useState, useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import lottie from 'lottie-web';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import ProyectCard from '../components/ProyectCard';
// Styles
import '../styles/index.scss';
// assets
import '../utils/fontawesome';
import animatedBlob from '../assets/animations/faster-blob-animation.json';
// data
import {
  healthyProjectData,
  travelJournalProjectData,
  travelMapProjectData,
  chatbotProjectData,
} from '../data/ProjectData';

const Index = ({ data }) => {
  const animationContainer = createRef();
  const [isImageHovered, setImageHovered] = useState(false);

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
        </Helmet>

        <section id="introduction" className="section">
          <div className="hero is-fullheight-with-navbar ">
            <div className="hero-body">
              <div
                className="container over-lottie"
                style={{ 'z-index': 899 }}>
                <div className="columns" style={{ 'z-index': 899 }}>
                  <div
                    className="column is-one-third is-hidden-touch"
                    onMouseEnter={() => setImageHovered(true)}
                    onMouseLeave={() => setImageHovered(false)}>
                    {isImageHovered ? (
                      <Fade duration={1200}>
                        <img
                          className="peep-maxi"
                          src="/images/maxi-peep-masked.png"
                          alt="Max with a mask"
                        />
                      </Fade>
                    ) : (
                      <Fade duration={1200}>
                        <img
                          className="peep-maxi"
                          src="/images/maxi-peep-happy.png"
                          alt="Math with a happy face"
                        />
                      </Fade>
                    )}
                  </div>
                  <div className="column " style={{ 'z-index': 899 }}>
                    <Fade>
                      <div className="my-4">
                        <h1 className="title is-1 has-text-weight-bold">
                          Hi! I'm Max.
                          <br />A Web Developer.
                        </h1>
                      </div>
                    </Fade>
                    <Fade top cascade duration={3000}>
                      <div className="container my-6">
                        <p className="subtitle is-4">
                          Every interaction tells a story.
                        </p>

                        <p className="subtitle is-4">
                          I'm interested in how technology influences
                          the stories we tell each other.
                        </p>

                        <p className="subtitle is-4">
                          I strive to develop software that makes each
                          story more engaging.
                        </p>

                        <div className="subtitle is-4 is-pulled-right mt-4">
                          <a href="https://www.linkedin.com/in/maxiblanco/">
                            <FontAwesomeIcon
                              className="mx-3 my-3 is-size-1"
                              icon={['fab', 'linkedin']}
                            />
                          </a>
                          <a href="https://github.com/maxiblanco">
                            <FontAwesomeIcon
                              className="mx-3 my-3 is-size-1"
                              icon={['fab', 'github']}
                            />
                          </a>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
                <div className="level">
                  <div className="level-item has-text-centered">
                    <Flip duration={800} delay={2000} top>
                      <button
                        type="button"
                        className="button mt-6 is-rounded more-button is-large is-pulled-right has-text-light has-background-grey-dark"
                        onClick={() => scrollTo('#projects')}>
                        <span>Projects</span>

                        <FontAwesomeIcon
                          className="ml-3 is-size-4"
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
            <div className="hero-body ">
              <div className="container">
                <Fade bottom duration={1200}>
                  <div className="columns is-vcentered">
                    <div className="column">
                      <ProyectCard {...healthyProjectData} />
                    </div>
                    <div className="column">
                      <ProyectCard {...travelJournalProjectData} />
                    </div>
                  </div>
                </Fade>
                <Fade bottom duration={1200}>
                  <div className="columns">
                    <div className="column">
                      <ProyectCard {...travelMapProjectData} />
                    </div>
                    <div className="column">
                      <ProyectCard {...chatbotProjectData} />
                    </div>
                  </div>
                </Fade>
              </div>
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
          <p className="has-text-centered">
            Work in progress by <strong>Maximiliano Blanco</strong>
            &#169; 2020
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
