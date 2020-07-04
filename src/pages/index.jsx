import React, { useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
/* import Img from 'gatsby-image'; */
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
import animatedBlob from '../assets/animations/faster-blob-animation.json';

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
      <div id="wrapper" className="container">
        <div className="absolute-container">
          <div className="sticky-container">
            <div className="animation-container" ref={animationContainer} />
          </div>
        </div>

        <Helmet>
          <title>Maximiliano Blanco</title>
        </Helmet>

        <Navbar />

        <section id="introduction" className="section">
          <div className="hero is-fullheight-with-navbar ">
            <div className="hero-body">
              <div className="container over-lottie">
                <div className="my-4">
                  <h1 className="title is-1 has-text-weight-bold">
                    Hi! I'm Max.
                    <br />A Web Developer.
                  </h1>
                </div>

                <Fade slowest>
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
                  <div className="column ">
                    <article className="card">
                      <div className="card-image">
                        <figure>
                          <img
                            src="https://via.placeholder.com/300.png?text=Project"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsa asperiores dignissimos tenetur nulla ea esse
                        quia nam dicta aut at.
                      </div>
                      <footer className="card-footer">
                        <button
                          type="button"
                          className="button card-footer-item"
                        >
                          Code
                        </button>
                        <button
                          type="button"
                          className="button card-footer-item"
                        >
                          Demo
                        </button>
                      </footer>
                    </article>
                  </div>
                  <div className="column ">
                    <div>
                      <article className="card">
                        <div className="card-image">
                          <figure>
                            <img
                              src="https://via.placeholder.com/200x300.png?text=Project"
                              alt=""
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit blanditiis explicabo consequuntur neque
                          quidem a distinctio fugiat natus sed reiciendis.
                        </div>
                        <footer className="card-footer">
                          <button
                            type="button"
                            className="button card-footer-item"
                          >
                            Code
                          </button>
                          <button
                            type="button"
                            className="button card-footer-item"
                          >
                            Demo
                          </button>
                        </footer>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <article className="card">
                      <div className="card-image">
                        <figure>
                          <img
                            src="https://via.placeholder.com/200x300.png?text=Project"
                            alt=""
                          />
                        </figure>
                        <div className="card-content">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Ipsa asperiores dignissimos tenetur nulla ea
                          esse quia nam dicta aut at.
                        </div>
                        <footer className="card-footer">
                          <button
                            type="button"
                            className="button card-footer-item"
                          >
                            Code
                          </button>
                          <button
                            type="button"
                            className="button card-footer-item"
                          >
                            Demo
                          </button>
                        </footer>
                      </div>
                    </article>
                  </div>
                  <div className="column ">
                    <article className="card">
                      <div className="card-image">
                        <figure>
                          <img
                            src="https://via.placeholder.com/300.png?text=Project"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Et in debitis a consequuntur libero ea excepturi
                        blanditiis quam aspernatur ipsum?
                      </div>
                      <footer className="card-footer">
                        <button
                          type="button"
                          className="button card-footer-item"
                        >
                          Code
                        </button>
                        <button
                          type="button"
                          className="button card-footer-item"
                        >
                          Demo
                        </button>
                      </footer>
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
              {/*               <div className="column">
                <Img fixed={data.file.childImageSharp.fixed} />
              </div> */}
              <div className="box column">
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
            Work in progress by <strong>Maximiliano Blanco</strong> &#169; 2020
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
