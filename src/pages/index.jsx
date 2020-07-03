import React, { useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Components
import lottie from 'lottie-web';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
// Styles
import '../styles/index.scss';
// assets
import '../utils/fontawesome';
import animatedBlob from '../assets/animations/animated-blob.json';

export const query = graphql`
  query {
    file(relativePath: { eq: "maxi-peep-happy.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 300) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;

const Index = ({ data }) => {
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
      <div className="container">
        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>

        <Navbar />

        <section id="introduction" className="section">
          <div className="hero is-fullheight-with-navbar">
            <div className="animation-container" ref={animationContainer} />
            <div className="hero-body">
              <div className="container">
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
          </div>
        </section>
        <section id="projects" className="section">
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
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
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container hero is-fullheight-with-navbar">
            <div className="columns hero-body">
              <div className="column">
                <Img fixed={data.file.childImageSharp.fixed} />
              </div>
              <div className="box">
                <ContactForm data={data} className="column" />
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
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
            Work in progress by <strong>Maximiliano Blanco</strong> &#169; 2020
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
