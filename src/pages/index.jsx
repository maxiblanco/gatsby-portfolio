import React, { useState, useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

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

export const query = graphql`
  query {
    happy: file(relativePath: { eq: "maxi-peep-happy.png" }) {
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
    masked: file(relativePath: { eq: "maxi-peep-masked.png" }) {
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
  const [isImageHovered, setImageHovered] = useState(false);
  const placeholderProjectData = {
    image: {
      src: 'https://placeholder.pics/svg/200x300',
      alt: 'Placeholder',
    },
    title: 'Placeholder project',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum explicabo voluptas dolorem sunt quaerat!',
    technologies: ['react', 'javascript'],
  };

  const healthyProjectData = {
    image: {
      src: '/gifs/healthy_dev_v01.gif',
      alt: 'Healthy Dev Web App',
    },
    title: 'Healthy Dev Web App',
    description:
      'Web app to share news and tips. Community development with mentor guidance',
    technologies: ['react', 'redux', 'redux-sagas'],
  };

  const travelJournalProjectData = {
    image: {
      src: '/gifs/travel_journal_v01.gif',
      alt: 'Travel Journal Web App',
    },
    title: 'Travel Journal Web App',
    description:
      'Web app to share travel stories built with Node.js and Express.',
    technologies: ['Node.js', 'Express', 'javascript'],
  };

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
                <div className="columns">
                  <div
                    className="column is-one-quarter is-hidden-mobile"
                    onMouseEnter={() => setImageHovered(true)}
                    onMouseLeave={() => setImageHovered(false)}
                  >
                    {isImageHovered ? (
                      <Img fixed={data.masked.childImageSharp.fixed} />
                    ) : (
                      <Img fixed={data.happy.childImageSharp.fixed} />
                    )}
                  </div>
                  <div className="column ">
                    <Fade>
                      <div className="my-4">
                        <h1 className="title is-1 has-text-weight-bold">
                          Hi! I'm Max.
                          <br />A Web Developer.
                        </h1>
                      </div>
                    </Fade>
                    <Fade top cascade>
                      <div className="container">
                        <p className="subtitle is-4">
                          Every interaction tells a story.
                        </p>
                        <p className="subtitle is-4">
                          I’m interested in how technology influences the
                          stories we tell each other.
                        </p>
                        <p className="subtitle is-4">
                          I strive to develop software that makes each story
                          more engaging.
                        </p>
                      </div>
                    </Fade>
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
                <div className="columns is-vcentered">
                  <div className="column">
                    <ProyectCard {...healthyProjectData} />
                  </div>
                  <div className="column">
                    <ProyectCard {...travelJournalProjectData} />
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <ProyectCard {...placeholderProjectData} />
                  </div>
                  <div className="column">
                    <ProyectCard {...placeholderProjectData} />
                  </div>
                </div>
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
            Work in progress by <strong>Maximiliano Blanco</strong> &#169; 2020
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
